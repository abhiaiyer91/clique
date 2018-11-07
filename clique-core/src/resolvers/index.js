import { search, searchBusiness } from "../search/yelp";

export default {
  Query: {
    eventById: (parent, { id }, { db }) => {
      return db.event({ id });
    },
    locations: async (parent, { searchText }) => {
      return await search({ text: searchText });
    },
    invitationsForEvent: async (parent, { eventId }, { db }) => {
      return db.invitations({ where: { eventId } });
    }
  },
  Event: {
    location: async parent => {
      if (!parent.locationId) {
        return null;
      }
      return await searchBusiness(parent.locationId);
    },
    cliqId: async (parent, _, { db }) => {
      const cliq = await db.event({ id: parent.id }).cliq();

      return cliq.id;
    }
  },
  Mutation: {
    updateEventLocation: (parent, { eventId, locationId }, { db }) => {
      return db.updateEvent({
        where: {
          id: eventId
        },
        data: {
          locationId
        }
      });
    },
    createEvent: async (parent, { type }, { db }) => {
      const input = {
        type,
        status: "INCOMPLETE",
        cliq: {
          create: {}
        }
      };

      return db.createEvent(input);
    }
  }
};
