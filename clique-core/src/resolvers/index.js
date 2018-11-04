import { search } from "../search/yelp";

export default {
  Query: {
    locations: async (parent, { searchText }) => {
      return await search({ text: searchText });
    }
  },
  Mutation: {
    createEvent: async (parent, { type }, { db }) => {
      const input = {
        type
      };

      const event = await db.createEvent(input);

      return event;
    }
  }
};
