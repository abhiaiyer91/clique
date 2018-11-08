declare const _default: "\nschema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  locations(searchText: String!): [Location]\n  eventById(id: ID!): Event\n  eventsForUser: [Event]\n  me: User\n  friends: [User]\n  invitationDetails(invitationId: ID!): InvitationEventPayload\n  invitationById(invitationId: ID!): Invitation\n  invitationsForEvent(eventId: ID!): [Invitation]\n}\n\ntype Mutation {\n  signup(name: String!, email: String!, password: String!): AuthPayload!\n  login(email: String!, password: String!): AuthPayload!\n  createEvent(type: EventType): Event\n  updateEventLocation(eventId: ID!, locationId: ID!): Event\n  updateParticipants(cliqId: ID!, participants: [ID!]!): Boolean\n  inviteUserToEvent(eventId: ID!, name: String!, email: String!): ID\n  resendInviteToEvent(invitationId: ID!): Boolean\n  acceptInvitationForNewUser(invitationId: ID!, password: String!, code: String!): InvitationPayload!\n  acceptInvitationForExistingUser(invitationId: ID!, code: String!): InvitationPayload!\n}\n";
export default _default;
