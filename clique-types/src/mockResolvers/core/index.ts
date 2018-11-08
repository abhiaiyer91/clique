import * as faker from 'faker';

const Address = {
  address1: '9491 Foothill Blvd',
  address2: 'Ste B',
  address3: null,
  city: 'Rancho Cucamonga',
  zipcode: '91730',
  country: 'US',
  state: 'CA'
};

function Event() {
  return {
    id: faker.random.uuid(),
    cliqId: faker.random.uuid(),
    location: {
      id: faker.random.uuid(),
      url: 'https://www.yelp.com/biz/mezzaterranean-rancho-cucamonga',
      name: 'Mezzaterranean',
      address: Address,
      avatar:
        'https://s3-media2.fl.yelpcdn.com/bphoto/c0vqWix0vA4Sxvqjblt3Qw/348s.jpg',
      rating: 4.1,
      reviewCount: 100
    },
    participants: [],
    eventTime: new Date(),
    type: 'HAPPY_HOUR',
    status: 'INCOMPLETE'
  };
}

export default {
  Query: {
    me: () => {
      return {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        avatar: faker.image.avatar()
      };
    },
    invitationDetails: (parent, { invitationId }) => {
      const event = Event();

      return {
        id: invitationId,
        name: faker.name.findName(),
        inviter: { name: faker.name.findName(), avatar: faker.image.avatar() },
        event
      };
    },
    locations: () => {
      return [];
    }
  }
};
