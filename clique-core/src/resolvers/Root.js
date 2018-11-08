import { searchBusiness } from "../search/yelp";

export default {
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
  }
};
