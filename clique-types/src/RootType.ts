// ============================================================================
        // DO NOT EDIT.
        // The contents of this file are generated by merging types exported from
        // src/Schemas/index.js
        // ============================================================================
        export default `
schema {
  query: Query
  mutation: Mutation
}

type Query {
  locations(searchText: String!): [Location]
  eventById(id: ID!): Event
  eventsForUser: [Event]
  me: User
  friends: [User]
}

type Mutation {
  createEvent(type: EventType): Event
  updateEventLocation(eventId: ID!, locationId: ID!): Event
  updatePendingParticipants(eventId: ID!, participants: [ID!]!): Event
  updateParticipants(eventId: ID!, participants: [ID!]!): Event
  signup(name: String!, email: String!, password: String!): AuthPayload!
  login(email: String!, password: String!): AuthPayload!
}
`;
        