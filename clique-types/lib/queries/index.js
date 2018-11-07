"use strict";
/******************************************************************************
 *
 * DO NOT EDIT THIS FILE.
 *
 * The contents of this file were generated by generateTypeDefinitions.ts
 *
 ******************************************************************************/
exports.__esModule = true;
var createEvent = "mutation createEvent($type: EventType) {\n  createEvent(type: $type) {\n    ...EventFragment\n  }\n}";
var eventById = "query eventById($id: ID!) {\n  eventById(id: $id) {\n    ...EventFragment\n  }\n}";
var eventFragment = "fragment EventFragment on Event {\n  id\n  location {\n    id\n    name\n    avatar\n    rating\n    reviewCount\n    url\n    address {\n      address1\n      address2\n      city\n      country\n      zipcode\n      state\n    }\n  }\n  participants {\n    id\n    avatar\n  }\n  cliqId\n  eventTime\n  type\n}";
var eventsForUser = "query eventsForUser {\n  eventsForUser {\n    id\n    location {\n      id\n      name\n      avatar\n      rating\n      reviewCount\n      url\n      address {\n        address1\n        address2\n        city\n        country\n        zipcode\n        state\n      }\n    }\n    participants {\n      id\n      avatar\n    }\n    eventTime\n    type\n  }\n}";
var invitationsForEvent = "query invitationsForEvent($eventId: ID!) {\n  invitationsForEvent(eventId: $eventId) {\n    id\n    eventId\n    name\n    email\n  }\n}";
var inviteUserToEvent = "mutation inviteUserToEvent($eventId: ID!, $name: String!, $email: String!) {\n  inviteUserToEvent(eventId: $eventId, name: $name, email: $email)\n}";
var searchLocations = "query searchLocations($searchText: String!) {\n  locations(searchText: $searchText) {\n    id\n    name\n    avatar\n    rating\n    reviewCount\n    url\n    address {\n      address1\n      address2\n      city\n      country\n      zipcode\n      state\n    }\n  }\n}";
var updateEventLocation = "mutation updateEventLocation($eventId: ID!, $locationId: ID!) {\n  updateEventLocation(eventId: $eventId, locationId: $locationId) {\n    ...EventFragment\n  }\n}";
var updateParticipants = "mutation updateParticipants($eventId: ID!, $participants: [ID!]!) {\n  updateParticipants(eventId: $eventId, participants: $participants) {\n    ...EventFragment\n  }\n}";
var friends = "query friends {\n  friends {\n    id\n    email\n    name\n    avatar\n  }\n}";
var login = "mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    user {\n      id\n      name\n      email\n    }\n    token\n  }\n}";
var me = "query me {\n  me {\n    id\n    name\n    location {\n      state\n      zipcode\n    }\n  }\n}";
var signup = "mutation signup($name: String!, $email: String!, $password: String!) {\n  signup(name: $name, email: $email, password: $password) {\n    user {\n      id\n      name\n      email\n    }\n    token\n  }\n}";
exports["default"] = {
    createEvent: createEvent,
    eventById: eventById,
    eventFragment: eventFragment,
    eventsForUser: eventsForUser,
    invitationsForEvent: invitationsForEvent,
    inviteUserToEvent: inviteUserToEvent,
    searchLocations: searchLocations,
    updateEventLocation: updateEventLocation,
    updateParticipants: updateParticipants,
    friends: friends,
    login: login,
    me: me,
    signup: signup
};
