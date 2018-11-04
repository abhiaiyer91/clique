module.exports = {
        typeDefs: /* GraphQL */ `type AggregateEvent {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Event {
  id: ID!
  participants: [ID!]!
  locationId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  eventTime: DateTime
  type: EventType!
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  participants: EventCreateparticipantsInput
  locationId: ID
  eventTime: DateTime
  type: EventType!
}

input EventCreateparticipantsInput {
  set: [ID!]
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  locationId_ASC
  locationId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  eventTime_ASC
  eventTime_DESC
  type_ASC
  type_DESC
}

type EventPreviousValues {
  id: ID!
  participants: [ID!]!
  locationId: ID
  createdAt: DateTime!
  updatedAt: DateTime!
  eventTime: DateTime
  type: EventType!
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

enum EventType {
  HAPPY_HOUR
}

input EventUpdateInput {
  participants: EventUpdateparticipantsInput
  locationId: ID
  eventTime: DateTime
  type: EventType
}

input EventUpdateparticipantsInput {
  set: [ID!]
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  locationId: ID
  locationId_not: ID
  locationId_in: [ID!]
  locationId_not_in: [ID!]
  locationId_lt: ID
  locationId_lte: ID
  locationId_gt: ID
  locationId_gte: ID
  locationId_contains: ID
  locationId_not_contains: ID
  locationId_starts_with: ID
  locationId_not_starts_with: ID
  locationId_ends_with: ID
  locationId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  eventTime: DateTime
  eventTime_not: DateTime
  eventTime_in: [DateTime!]
  eventTime_not_in: [DateTime!]
  eventTime_lt: DateTime
  eventTime_lte: DateTime
  eventTime_gt: DateTime
  eventTime_gte: DateTime
  type: EventType
  type_not: EventType
  type_in: [EventType!]
  type_not_in: [EventType!]
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  node(id: ID!): Node
}

type Subscription {
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
}
`
      }
    