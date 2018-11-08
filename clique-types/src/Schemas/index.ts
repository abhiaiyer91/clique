
/******************************************************************************
*
* DO NOT EDIT THIS FILE.
*
* The contents of this file were generated by mergeSchemaExports.ts
*
******************************************************************************/

  export const CoreRootType = `
type Query {
  locations(searchText: String!): [Location]
  eventById(id: ID!): Event
  eventsForUser: [Event]
  me: User
  friends: [User]
  invitationDetails(invitationId: ID!): InvitationEventPayload
  invitationById(invitationId: ID!): Invitation
  invitationsForEvent(eventId: ID!): [Invitation]
}
type Mutation {
  signup(name: String!, email: String!, password: String!): AuthPayload!
  login(email: String!, password: String!): AuthPayload!
  createEvent(type: EventType): Event
  updateEventLocation(eventId: ID!, locationId: ID!): Event
  updateParticipants(cliqId: ID!, participants: [ID!]!): Boolean
  inviteUserToEvent(eventId: ID!, name: String!, email: String!): ID
  resendInviteToEvent(invitationId: ID!): Boolean
  acceptInvitationForNewUser(
    invitationId: ID!
    password: String!
    code: String!
  ): InvitationPayload!
  acceptInvitationForExistingUser(
    invitationId: ID!
    code: String!
  ): InvitationPayload!
}
`;


