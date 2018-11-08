import { random, name, internet, phone, image} from 'faker';

export default {
  Query: {
    locations: () => {
      return [];
    },
    me: () => {
      return {
        id: random.uuid,
        name: name.findName(),
        email: internet.email(),
        phone: phone.phoneNumber,
        avatar: image.avatar,
      }
    }
  }
};
