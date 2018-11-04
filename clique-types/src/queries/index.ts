/******************************************************************************
 *
 * DO NOT EDIT THIS FILE.
 *
 * The contents of this file were generated by generateTypeDefinitions.ts
 *
 ******************************************************************************/

const createEvent = `mutation createEvent($type: EventType) {
  createEvent(type: $type) {
    ...EventFragment
  }
}`;
const eventById = `query eventById($id: ID!) {
  eventById(id: $id) {
    ...EventFragment
  }
}`;
const eventFragment = `fragment EventFragment on Event {
  id
  location {
    id
    name
    avatar
    rating
    reviewCount
    url
    address {
      address1
      address2
      city
      country
      zipcode
      state
    }
  }
  participants {
    id
    avatar
  }
  invitedParticipants {
    id
    avatar
  }
  eventTime
  type
}`;
const eventsForUser = `query eventsForUser {
  eventsForUser {
    id
    location {
      id
      name
      avatar
      rating
      reviewCount
      url
      address {
        address1
        address2
        city
        country
        zipcode
        state
      }
    }
    participants {
      id
      avatar
    }
    eventTime
    type
  }
}`;
const searchLocations = `query searchLocations($searchText: String!) {
  locations(searchText: $searchText) {
    id
    name
    avatar
    rating
    reviewCount
    url
    address {
      address1
      address2
      city
      country
      zipcode
      state
    }
  }
}`;
const updateEventLocation = `mutation updateEventLocation($eventId: ID!, $locationId: ID!) {
  updateEventLocation(eventId: $eventId, locationId: $locationId) {
    ...EventFragment
  }
}`;
const updateParticipants = `mutation updateParticipants($eventId: ID!, $participants: [ID!]!) {
  updateParticipants(eventId: $eventId, participants: $participants) {
    ...EventFragment
  }
}`;
const updatePendingParticipants = `mutation updatePendingParticipants($eventId: ID!, $participants: [ID!]!) {
  updatePendingParticipants(eventId: $eventId, participants: $participants) {
    ...EventFragment
  }
}`;
const friends = `query friends {
  friends {
    id
    email
    name
    avatar
  }
}`;
const login = `mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      name
      email
    }
    token
  }
}`;
const me = `query me {
  me {
    id
    name
    location {
      state
      zipcode
    }
  }
}`;
const signup = `mutation signup($name: String!, $email: String!, $password: String!) {
  signup(name: $name, email: $email, password: $password) {
    user {
      id
      name
      email
    }
    token
  }
}`;

export default {
  createEvent,
  eventById,
  eventFragment,
  eventsForUser,
  searchLocations,
  updateEventLocation,
  updateParticipants,
  updatePendingParticipants,
  friends,
  login,
  me,
  signup
};
