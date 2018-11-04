import { getUserId } from "../utils";

export default {
  me: (parent, args, ctx) => {
    return ctx.db.user({ id: getUserId(ctx) });
  }
};
