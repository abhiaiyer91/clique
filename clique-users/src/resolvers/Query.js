import { getUserId } from "../utils";

export default {
  me: (parent, args, { db, userId }) => {
    return db.user({ id: userId });
  }
};
