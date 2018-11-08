import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { APP_SECRET } from "../utils";

const uuidv4 = require("uuid/v4");

function sendInvititations(invites) {}

export default {
  inviteUserToEvent: async (parent, { eventId, name, email }, { db }) => {
    const sentAt = new Date();
    const code = uuidv4();

    const invitation = await db.createInvitation({
      participantId: null,
      name,
      email,
      eventId,
      code,
      sentAt
    });

    // send invitation

    console.log(code);

    return invitation.id;
  },
  acceptInvitationForNewUser: async (
    parent,
    { invitationId, code, password },
    { db }
  ) => {
    // find invitation with invitationId and code
    const invitation = await db.invitation({
      id: invitationId
    });

    if (!invitation) {
      throw new Error("Invitation not found");
    }

    if (invitation.code !== code) {
      throw new Error("Invalid token received.");
    }

    const { name, email, eventId } = invitation;

    const user = await db.createUser({
      email,
      name,
      password
    });

    const userId = user.id;

    const event = await coreServiceClient.query.eventById(
      { id: eventId },
      `
      {
        cliq {
          id
          participants
        }
      }
    `
    );

    const { cliq } = event;

    // add user to participants, remove from pending participants
    const { participants } = cliq;

    await coreServiceClient.mutation.updateParticipants({
      cliqId: cliq.id,
      participants: concat(participants, userId)
    });

    return {
      eventId,
      token: sign({ userId: userId }, APP_SECRET)
    };
  },
  acceptInvitationForExistingUser: async (
    parent,
    { invitationId, code },
    { db }
  ) => {
    // find invitation with invitationId and code
    const invitation = await db.invitation({
      id: invitationId
    });

    if (!invitation) {
      throw new Error("Invitation not found");
    }

    if (invitation.code !== code) {
      throw new Error("Invalid token received.");
    }

    const { participantId, eventId } = invitation;

    const userId = participantId;

    const event = await coreServiceClient.query.eventById(
      { id: eventId },
      `
      {
        cliq {
          id
          participants
        }
      }
    `
    );

    const { cliq } = event;

    // add user to participants, remove from pending participants
    const { participants } = cliq;

    await coreServiceClient.mutation.updateParticipants({
      cliqId: cliq.id,
      participants: concat(participants, userId)
    });

    return {
      eventId,
      token: sign({ userId: userId }, APP_SECRET)
    };
  },
  // updatePendingParticipants: async (
  //   parent,
  //   { eventId, participants },
  //   { db }
  // ) => {
  //   // find list of current participants
  //   const event = db.event({ id: eventId });
  //   const { cliq } = event;
  //   const invitedParticipants = concat(
  //     get(cliq, "participants"),
  //     get(cliq, "pendingParticipants")
  //   );

  //   const participantsToInvite = without(participants, invitedParticipants);

  //   const cliqId = get(cliq, "id");
  //   const sentAt = new Date();
  //   const invitePromises = map(
  //     participantsToInvite,
  //     async participantToInvite => {
  //       const code = uuidv4();

  //       const email = get(await db.user({ id: participantToInvite }), "email");

  //       return await db.createInvitation({
  //         participantId,
  //         email,
  //         cliqId,
  //         code,
  //         sentAt
  //       });
  //     }
  //   );

  //   // send the invitations
  //   sendInvititations(Promise.all(invites));

  //   return event;
  // },
  signup: async (parent, { name, email, password }, ctx) => {
    const hashedPassword = await hash(password, 10);
    const user = await ctx.db.createUser({
      name,
      email,
      password: hashedPassword
    });

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  },
  login: async (parent, { email, password }, ctx) => {
    const user = await ctx.db.user({ email });

    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error("Invalid password");
    }

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  }
};
