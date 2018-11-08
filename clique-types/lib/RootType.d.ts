declare const _default: "\nschema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  locations(searchText: String!): [Location]\n  eventById(id: ID!): Event\n  eventsForUser: [Event]\n  me: User\n  friends: [User]\n  invitationsForEvent(eventId: ID!): [Invitation]\n}\n\ntype Mutation {\n  createEvent(type: EventType): Event\n  updateEventLocation(eventId: ID!, locationId: ID!): Event\n  updateParticipants(cliqId: ID!, participants: [ID!]!): Boolean\n  signup(name: String!, email: String!, password: String!): AuthPayload!\n  login(email: String!, password: String!): AuthPayload!\n  inviteUserToEvent(eventId: ID!, name: String!, email: String!): ID\n  resendInviteToEvent(invitationId: ID!): Boolean\n  acceptInvitation(invitationId: ID!, code: ID!): Event\n}\n";
export default _default;
