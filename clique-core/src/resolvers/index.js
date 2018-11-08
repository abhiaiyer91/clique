import { search, searchBusiness } from "../search/yelp";

export default {
  Query: {
    eventById: (parent, { id }, { db }) => {
      return db.event({ id });
    },
    locations: async (parent, { searchText }) => {
      return await search({ text: searchText });
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
    updateParticipants: async (parent, { cliqId, participants }, { db }) => {
      const cliq = await db.cliq({ id: cliqId });

      const cliqParticipants = cliq.participants || [];

      try {
        await db.updateCliq({
          where: {
            id: cliqId
          },
          data: {
            participants: { set: [...cliqParticipants, ...participants] }
          }
        });

        return true;
      } catch (e) {
        console.error(e);

        return false;
      }
    },
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
