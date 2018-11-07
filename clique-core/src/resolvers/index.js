import { search, searchBusiness } from '../search/yelp';
import { concat, get, map } from 'lodash';
const uuidv4 = require('uuid/v4');

function sendInvititations(invites) {}

export default {
  Query: {
    eventById: (parent, { id }, { db }) => {
      return db.event({ id });
    },
    locations: async (parent, { searchText }) => {
      return await search({ text: searchText });
    },
    invitationsForEvent: async (parent, { eventId }, { db }) => {
      return db.invitations({ where: { eventId }});
    }
  },
  Event: {
    location: async parent => {
      if (!parent.locationId) {
        return null;
      }
      return await searchBusiness(parent.locationId);
    },
  },
  Mutation: {
    inviteUserToEvent: async (parent, { eventId, name, email }, { db }) => {
      const sentAt = new Date();
      const code = uuidv4();

      await db.createInvitation({
        participantId: null,
        name,
        email,
        eventId,
        code,
        sentAt,
      });

      return true;
    },
    updateEventLocation: (parent, { eventId, locationId }, { db }) => {
      return db.updateEvent({
        where: {
          id: eventId,
        },
        data: {
          locationId,
        },
      });
    },
    createEvent: async (parent, { type }, { db }) => {
      const input = {
        type,
        status: 'INCOMPLETE',
        cliq: {
          create: {}
        }
      };

      const event = await db.createEvent(input);

      const cliq = await db.event({ id: event.id }).cliq();

      return {...event, cliqId: cliq.id} ;
    },
    updatePendingParticipants: async (
      parent,
      { eventId, participants },
      { db },
    ) => {
      // find list of current participants
      const event = db.event({ id: eventId });
      const { cliq } = event;
      const invitedParticipants = concat(
        get(cliq, 'participants'),
        get(cliq, 'pendingParticipants'),
      );

      const participantsToInvite = without(participants, invitedParticipants);

      const cliqId = get(cliq, 'id');
      const sentAt = new Date();
      const invitePromises = map(
        participantsToInvite,
        async participantToInvite => {
          const code = uuidv4();

          const email = get(
            await db.user({ id: participantToInvite }),
            'email',
          );

          return await db.createInvitation({
            participantId,
            email,
            cliqId,
            code,
            sentAt,
          });
        },
      );

      // send the invitations
      sendInvititations(Promise.all(invites));

      return event;
    },
    acceptInvitation: async (parent, { invitationId, code }, { db }) => {
      // find invitation with invitationId and code
      const invitation = await db.invitation({
        id: invitationId,
        code,
      });

      if (!invitation) {
        throw new Error('Invitation not found');
      }

      const { participantId, email, eventId } = invitation;

      let userId = participantId;

      // if no participantId, then we should create a user using the email
      let user = await db.user({ id: participantId });
      if (!user) {
        // create the user
        user = await db.createUser({
          email,
        });

        userId = get(user, 'id');
      }

      const event = db.event({ id: eventId });
      const { cliq } = event;

      // add user to participants, remove from pending participants
      const { participants, pendingParticipants } = cliq;
      await db.updateCliq({
        ...cliq,
        participants: concat(participants, userId),
        pendingParticipants: without(pendingParticipants, userId),
      });
    },
  },
};
