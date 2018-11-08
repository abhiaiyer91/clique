/******************************************************************************
 *
 * DO NOT EDIT THIS FILE.
 *
 * The contents of this file were generated by generateTypeDefinitions.ts
 *
 ******************************************************************************/

const Address = `
type Address {
  address1: String
  address2: String
  address3: String
  city: String
  zipcode: String
  country: String
  state: String
}
`;

const Event = `
type Event {
  id: ID!
  cliqId: ID!
  participants: [User]
  location: Location
  eventTime: Float
  type: EventType!
  status: EventStatus!
}
`;

const EventStatus = `
enum EventStatus {
  COMPLETED
  PLANNED
  INCOMPLETE
  CANCELLED
}
`;

const EventType = `
enum EventType {
  HAPPY_HOUR
}
`;

const Location = `
type Location {
  id: ID!
  url: String
  name: String!
  address: Address
  avatar: String
  rating: Float
  reviewCount: Int
}
`;

const AuthPayload = `
type AuthPayload {
  token: String!
  user: User!
}
`;

const Invitation = `
type Invitation {
  id: ID!
  eventId: ID!
  name: String!
  email: String!
}
`;

const InvitationPayload = `
type InvitationPayload {
  token: String!
  eventId: String!
}
`;

const User = `
type User {
  id: ID!
  email: String!
  avatar: String
  name: String!
  phone: String
  location: Address
}
`;

export default {
  Address,
  Event,
  EventStatus,
  EventType,
  Location,
  AuthPayload,
  Invitation,
  InvitationPayload,
  User
};
