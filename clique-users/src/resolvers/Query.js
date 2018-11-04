import { getUserId } from "../utils";

export default {
  me: (parent, args, { db, userId }) => {
    return db.user({ id: userId });
  },

  friends: async (parent, args, { db, userId }) => {
    const user = await db.user({ id: userId });

    const userEmail = user && user.email;

    const friends = [
      {
        id: '1',
        name: "Jeannie Dang",
        email: "jeannie.b.dang@gmail.com",
        avatar:
          "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/15966221_10207421909657030_8725275612281465727_n.jpg?_nc_cat=101&_nc_ht=scontent-lax3-1.xx&oh=1919e2851b09481e76ff955c64c43cf1&oe=5C752EC9"
      },
      {
        id: '2',
        name: "Abhi Aiyer",
        email: "abhiaiyer91@gmail.com",
        avatar: "https://avatars1.githubusercontent.com/u/2359375?s=460&v=4"
      },
      {
        id: '3',
        name: "Rishaad Taraporewalla",
        email: "rishaadt@gmail.com",
        avatar:
          "https://www.facebook.com/search/async/profile_picture/?fbid=1112563969&width=72&height=72"
      },
      {
        id: '4',
        name: "Rima Patel",
        email: "rimap@gmail.com",
        avatar:
          "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-1/p200x200/40575739_1645442902245726_8249479711336431616_n.jpg?_nc_cat=104&_nc_ht=scontent-lax3-2.xx&oh=48b8fde9def98fe8e3b37a6d977d4e40&oe=5C48C203"
      },
      {
        id: '5',
        name: "Ryan Hansen",
        email: "rphansen91@gmail.com",
        avatar:
          "https://www.facebook.com/search/async/profile_picture/?fbid=100000266166593&width=72&height=72"
      }
    ];

    return friends;
  }
};
