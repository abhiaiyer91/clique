import { search } from "../search/yelp";

export default {
  Query: {
    locations: async (parent, { searchText }) => {
      return await search({ text: searchText });
    },
  }
};
