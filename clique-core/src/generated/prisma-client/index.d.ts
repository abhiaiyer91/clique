// Code generated by Prisma (prisma@1.19.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  cliq: (where?: CliqWhereInput) => Promise<boolean>;
  event: (where?: EventWhereInput) => Promise<boolean>;
  invitation: (where?: InvitationWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  cliq: (where: CliqWhereUniqueInput) => Cliq;
  cliqs: (
    args?: {
      where?: CliqWhereInput;
      orderBy?: CliqOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<CliqNode>;
  cliqsConnection: (
    args?: {
      where?: CliqWhereInput;
      orderBy?: CliqOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CliqConnection;
  event: (where: EventWhereUniqueInput) => Event;
  events: (
    args?: {
      where?: EventWhereInput;
      orderBy?: EventOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<EventNode>;
  eventsConnection: (
    args?: {
      where?: EventWhereInput;
      orderBy?: EventOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => EventConnection;
  invitation: (where: InvitationWhereUniqueInput) => Invitation;
  invitations: (
    args?: {
      where?: InvitationWhereInput;
      orderBy?: InvitationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<InvitationNode>;
  invitationsConnection: (
    args?: {
      where?: InvitationWhereInput;
      orderBy?: InvitationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => InvitationConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCliq: (data: CliqCreateInput) => Cliq;
  updateCliq: (
    args: { data: CliqUpdateInput; where: CliqWhereUniqueInput }
  ) => Cliq;
  updateManyCliqs: (
    args: { data: CliqUpdateInput; where?: CliqWhereInput }
  ) => BatchPayload;
  upsertCliq: (
    args: {
      where: CliqWhereUniqueInput;
      create: CliqCreateInput;
      update: CliqUpdateInput;
    }
  ) => Cliq;
  deleteCliq: (where: CliqWhereUniqueInput) => Cliq;
  deleteManyCliqs: (where?: CliqWhereInput) => BatchPayload;
  createEvent: (data: EventCreateInput) => Event;
  updateEvent: (
    args: { data: EventUpdateInput; where: EventWhereUniqueInput }
  ) => Event;
  updateManyEvents: (
    args: { data: EventUpdateInput; where?: EventWhereInput }
  ) => BatchPayload;
  upsertEvent: (
    args: {
      where: EventWhereUniqueInput;
      create: EventCreateInput;
      update: EventUpdateInput;
    }
  ) => Event;
  deleteEvent: (where: EventWhereUniqueInput) => Event;
  deleteManyEvents: (where?: EventWhereInput) => BatchPayload;
  createInvitation: (data: InvitationCreateInput) => Invitation;
  updateInvitation: (
    args: { data: InvitationUpdateInput; where: InvitationWhereUniqueInput }
  ) => Invitation;
  updateManyInvitations: (
    args: { data: InvitationUpdateInput; where?: InvitationWhereInput }
  ) => BatchPayload;
  upsertInvitation: (
    args: {
      where: InvitationWhereUniqueInput;
      create: InvitationCreateInput;
      update: InvitationUpdateInput;
    }
  ) => Invitation;
  deleteInvitation: (where: InvitationWhereUniqueInput) => Invitation;
  deleteManyInvitations: (where?: InvitationWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  cliq: (
    where?: CliqSubscriptionWhereInput
  ) => CliqSubscriptionPayloadSubscription;
  event: (
    where?: EventSubscriptionWhereInput
  ) => EventSubscriptionPayloadSubscription;
  invitation: (
    where?: InvitationSubscriptionWhereInput
  ) => InvitationSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EventType = "HAPPY_HOUR";

export type EventOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "locationId_ASC"
  | "locationId_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "eventTime_ASC"
  | "eventTime_DESC"
  | "type_ASC"
  | "type_DESC"
  | "status_ASC"
  | "status_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type InviteStatus = "ACCEPTED" | "DECLINED" | "PENDING";

export type CliqOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type InvitationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "eventId_ASC"
  | "eventId_DESC"
  | "participantId_ASC"
  | "participantId_DESC"
  | "email_ASC"
  | "email_DESC"
  | "code_ASC"
  | "code_DESC"
  | "sentAt_ASC"
  | "sentAt_DESC"
  | "readAt_ASC"
  | "readAt_DESC"
  | "acceptedAt_ASC"
  | "acceptedAt_DESC"
  | "declinedAt_ASC"
  | "declinedAt_DESC"
  | "status_ASC"
  | "status_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type EventStatus = "COMPLETED" | "PLANNED" | "INCOMPLETE" | "CANCELLED";

export interface CliqCreateInput {
  participants?: CliqCreateparticipantsInput;
  pendingParticipants?: CliqCreatependingParticipantsInput;
}

export interface EventCreateInput {
  locationId?: ID_Input;
  cliq?: CliqCreateOneInput;
  eventTime?: DateTimeInput;
  type: EventType;
  status: EventStatus;
}

export type CliqWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface CliqUpdatependingParticipantsInput {
  set?: ID_Input[] | ID_Input;
}

export interface InvitationCreateInput {
  eventId: ID_Input;
  participantId?: ID_Input;
  email?: String;
  code: ID_Input;
  sentAt: DateTimeInput;
  readAt: DateTimeInput;
  acceptedAt: DateTimeInput;
  declinedAt: DateTimeInput;
  status?: InviteStatus;
}

export type InvitationWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface CliqUpdateDataInput {
  participants?: CliqUpdateparticipantsInput;
  pendingParticipants?: CliqUpdatependingParticipantsInput;
}

export interface CliqUpdateparticipantsInput {
  set?: ID_Input[] | ID_Input;
}

export interface CliqUpdateOneInput {
  create?: CliqCreateInput;
  update?: CliqUpdateDataInput;
  upsert?: CliqUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: CliqWhereUniqueInput;
}

export interface EventSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: EventWhereInput;
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput;
}

export interface InvitationUpdateInput {
  eventId?: ID_Input;
  participantId?: ID_Input;
  email?: String;
  code?: ID_Input;
  sentAt?: DateTimeInput;
  readAt?: DateTimeInput;
  acceptedAt?: DateTimeInput;
  declinedAt?: DateTimeInput;
  status?: InviteStatus;
}

export interface InvitationWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  eventId?: ID_Input;
  eventId_not?: ID_Input;
  eventId_in?: ID_Input[] | ID_Input;
  eventId_not_in?: ID_Input[] | ID_Input;
  eventId_lt?: ID_Input;
  eventId_lte?: ID_Input;
  eventId_gt?: ID_Input;
  eventId_gte?: ID_Input;
  eventId_contains?: ID_Input;
  eventId_not_contains?: ID_Input;
  eventId_starts_with?: ID_Input;
  eventId_not_starts_with?: ID_Input;
  eventId_ends_with?: ID_Input;
  eventId_not_ends_with?: ID_Input;
  participantId?: ID_Input;
  participantId_not?: ID_Input;
  participantId_in?: ID_Input[] | ID_Input;
  participantId_not_in?: ID_Input[] | ID_Input;
  participantId_lt?: ID_Input;
  participantId_lte?: ID_Input;
  participantId_gt?: ID_Input;
  participantId_gte?: ID_Input;
  participantId_contains?: ID_Input;
  participantId_not_contains?: ID_Input;
  participantId_starts_with?: ID_Input;
  participantId_not_starts_with?: ID_Input;
  participantId_ends_with?: ID_Input;
  participantId_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  code?: ID_Input;
  code_not?: ID_Input;
  code_in?: ID_Input[] | ID_Input;
  code_not_in?: ID_Input[] | ID_Input;
  code_lt?: ID_Input;
  code_lte?: ID_Input;
  code_gt?: ID_Input;
  code_gte?: ID_Input;
  code_contains?: ID_Input;
  code_not_contains?: ID_Input;
  code_starts_with?: ID_Input;
  code_not_starts_with?: ID_Input;
  code_ends_with?: ID_Input;
  code_not_ends_with?: ID_Input;
  sentAt?: DateTimeInput;
  sentAt_not?: DateTimeInput;
  sentAt_in?: DateTimeInput[] | DateTimeInput;
  sentAt_not_in?: DateTimeInput[] | DateTimeInput;
  sentAt_lt?: DateTimeInput;
  sentAt_lte?: DateTimeInput;
  sentAt_gt?: DateTimeInput;
  sentAt_gte?: DateTimeInput;
  readAt?: DateTimeInput;
  readAt_not?: DateTimeInput;
  readAt_in?: DateTimeInput[] | DateTimeInput;
  readAt_not_in?: DateTimeInput[] | DateTimeInput;
  readAt_lt?: DateTimeInput;
  readAt_lte?: DateTimeInput;
  readAt_gt?: DateTimeInput;
  readAt_gte?: DateTimeInput;
  acceptedAt?: DateTimeInput;
  acceptedAt_not?: DateTimeInput;
  acceptedAt_in?: DateTimeInput[] | DateTimeInput;
  acceptedAt_not_in?: DateTimeInput[] | DateTimeInput;
  acceptedAt_lt?: DateTimeInput;
  acceptedAt_lte?: DateTimeInput;
  acceptedAt_gt?: DateTimeInput;
  acceptedAt_gte?: DateTimeInput;
  declinedAt?: DateTimeInput;
  declinedAt_not?: DateTimeInput;
  declinedAt_in?: DateTimeInput[] | DateTimeInput;
  declinedAt_not_in?: DateTimeInput[] | DateTimeInput;
  declinedAt_lt?: DateTimeInput;
  declinedAt_lte?: DateTimeInput;
  declinedAt_gt?: DateTimeInput;
  declinedAt_gte?: DateTimeInput;
  status?: InviteStatus;
  status_not?: InviteStatus;
  status_in?: InviteStatus[] | InviteStatus;
  status_not_in?: InviteStatus[] | InviteStatus;
  AND?: InvitationWhereInput[] | InvitationWhereInput;
  OR?: InvitationWhereInput[] | InvitationWhereInput;
  NOT?: InvitationWhereInput[] | InvitationWhereInput;
}

export interface EventWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  locationId?: ID_Input;
  locationId_not?: ID_Input;
  locationId_in?: ID_Input[] | ID_Input;
  locationId_not_in?: ID_Input[] | ID_Input;
  locationId_lt?: ID_Input;
  locationId_lte?: ID_Input;
  locationId_gt?: ID_Input;
  locationId_gte?: ID_Input;
  locationId_contains?: ID_Input;
  locationId_not_contains?: ID_Input;
  locationId_starts_with?: ID_Input;
  locationId_not_starts_with?: ID_Input;
  locationId_ends_with?: ID_Input;
  locationId_not_ends_with?: ID_Input;
  cliq?: CliqWhereInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  eventTime?: DateTimeInput;
  eventTime_not?: DateTimeInput;
  eventTime_in?: DateTimeInput[] | DateTimeInput;
  eventTime_not_in?: DateTimeInput[] | DateTimeInput;
  eventTime_lt?: DateTimeInput;
  eventTime_lte?: DateTimeInput;
  eventTime_gt?: DateTimeInput;
  eventTime_gte?: DateTimeInput;
  type?: EventType;
  type_not?: EventType;
  type_in?: EventType[] | EventType;
  type_not_in?: EventType[] | EventType;
  status?: EventStatus;
  status_not?: EventStatus;
  status_in?: EventStatus[] | EventStatus;
  status_not_in?: EventStatus[] | EventStatus;
  AND?: EventWhereInput[] | EventWhereInput;
  OR?: EventWhereInput[] | EventWhereInput;
  NOT?: EventWhereInput[] | EventWhereInput;
}

export interface CliqWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  AND?: CliqWhereInput[] | CliqWhereInput;
  OR?: CliqWhereInput[] | CliqWhereInput;
  NOT?: CliqWhereInput[] | CliqWhereInput;
}

export interface CliqCreateOneInput {
  create?: CliqCreateInput;
  connect?: CliqWhereUniqueInput;
}

export type EventWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface CliqCreateparticipantsInput {
  set?: ID_Input[] | ID_Input;
}

export interface CliqCreatependingParticipantsInput {
  set?: ID_Input[] | ID_Input;
}

export interface CliqUpdateInput {
  participants?: CliqUpdateparticipantsInput;
  pendingParticipants?: CliqUpdatependingParticipantsInput;
}

export interface EventUpdateInput {
  locationId?: ID_Input;
  cliq?: CliqUpdateOneInput;
  eventTime?: DateTimeInput;
  type?: EventType;
  status?: EventStatus;
}

export interface CliqUpsertNestedInput {
  update: CliqUpdateDataInput;
  create: CliqCreateInput;
}

export interface CliqSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CliqWhereInput;
  AND?: CliqSubscriptionWhereInput[] | CliqSubscriptionWhereInput;
  OR?: CliqSubscriptionWhereInput[] | CliqSubscriptionWhereInput;
  NOT?: CliqSubscriptionWhereInput[] | CliqSubscriptionWhereInput;
}

export interface InvitationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: InvitationWhereInput;
  AND?: InvitationSubscriptionWhereInput[] | InvitationSubscriptionWhereInput;
  OR?: InvitationSubscriptionWhereInput[] | InvitationSubscriptionWhereInput;
  NOT?: InvitationSubscriptionWhereInput[] | InvitationSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface InvitationEdgeNode {
  cursor: String;
}

export interface InvitationEdge
  extends Promise<InvitationEdgeNode>,
    Fragmentable {
  node: <T = Invitation>() => T;
  cursor: () => Promise<String>;
}

export interface InvitationEdgeSubscription
  extends Promise<AsyncIterator<InvitationEdgeNode>>,
    Fragmentable {
  node: <T = InvitationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface CliqEdgeNode {
  cursor: String;
}

export interface CliqEdge extends Promise<CliqEdgeNode>, Fragmentable {
  node: <T = Cliq>() => T;
  cursor: () => Promise<String>;
}

export interface CliqEdgeSubscription
  extends Promise<AsyncIterator<CliqEdgeNode>>,
    Fragmentable {
  node: <T = CliqSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface InvitationPreviousValuesNode {
  id: ID_Output;
  eventId: ID_Output;
  participantId?: ID_Output;
  email?: String;
  code: ID_Output;
  sentAt: DateTimeOutput;
  readAt: DateTimeOutput;
  acceptedAt: DateTimeOutput;
  declinedAt: DateTimeOutput;
  status?: InviteStatus;
}

export interface InvitationPreviousValues
  extends Promise<InvitationPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  eventId: () => Promise<ID_Output>;
  participantId: () => Promise<ID_Output>;
  email: () => Promise<String>;
  code: () => Promise<ID_Output>;
  sentAt: () => Promise<DateTimeOutput>;
  readAt: () => Promise<DateTimeOutput>;
  acceptedAt: () => Promise<DateTimeOutput>;
  declinedAt: () => Promise<DateTimeOutput>;
  status: () => Promise<InviteStatus>;
}

export interface InvitationPreviousValuesSubscription
  extends Promise<AsyncIterator<InvitationPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  eventId: () => Promise<AsyncIterator<ID_Output>>;
  participantId: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  code: () => Promise<AsyncIterator<ID_Output>>;
  sentAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  readAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  acceptedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  declinedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  status: () => Promise<AsyncIterator<InviteStatus>>;
}

export interface AggregateInvitationNode {
  count: Int;
}

export interface AggregateInvitation
  extends Promise<AggregateInvitationNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateInvitationSubscription
  extends Promise<AsyncIterator<AggregateInvitationNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface InvitationConnectionNode {}

export interface InvitationConnection
  extends Promise<InvitationConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<InvitationEdgeNode>>() => T;
  aggregate: <T = AggregateInvitation>() => T;
}

export interface InvitationConnectionSubscription
  extends Promise<AsyncIterator<InvitationConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<InvitationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateInvitationSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateEventNode {
  count: Int;
}

export interface AggregateEvent
  extends Promise<AggregateEventNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEventSubscription
  extends Promise<AsyncIterator<AggregateEventNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface InvitationNode {
  id: ID_Output;
  eventId: ID_Output;
  participantId?: ID_Output;
  email?: String;
  code: ID_Output;
  sentAt: DateTimeOutput;
  readAt: DateTimeOutput;
  acceptedAt: DateTimeOutput;
  declinedAt: DateTimeOutput;
  status?: InviteStatus;
}

export interface Invitation extends Promise<InvitationNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  eventId: () => Promise<ID_Output>;
  participantId: () => Promise<ID_Output>;
  email: () => Promise<String>;
  code: () => Promise<ID_Output>;
  sentAt: () => Promise<DateTimeOutput>;
  readAt: () => Promise<DateTimeOutput>;
  acceptedAt: () => Promise<DateTimeOutput>;
  declinedAt: () => Promise<DateTimeOutput>;
  status: () => Promise<InviteStatus>;
}

export interface InvitationSubscription
  extends Promise<AsyncIterator<InvitationNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  eventId: () => Promise<AsyncIterator<ID_Output>>;
  participantId: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  code: () => Promise<AsyncIterator<ID_Output>>;
  sentAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  readAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  acceptedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  declinedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  status: () => Promise<AsyncIterator<InviteStatus>>;
}

export interface EventSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface EventSubscriptionPayload
  extends Promise<EventSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Event>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EventPreviousValues>() => T;
}

export interface EventSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EventSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EventSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EventPreviousValuesSubscription>() => T;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CliqConnectionNode {}

export interface CliqConnection
  extends Promise<CliqConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<CliqEdgeNode>>() => T;
  aggregate: <T = AggregateCliq>() => T;
}

export interface CliqConnectionSubscription
  extends Promise<AsyncIterator<CliqConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CliqEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCliqSubscription>() => T;
}

export interface InvitationSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface InvitationSubscriptionPayload
  extends Promise<InvitationSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Invitation>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = InvitationPreviousValues>() => T;
}

export interface InvitationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<InvitationSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = InvitationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = InvitationPreviousValuesSubscription>() => T;
}

export interface CliqPreviousValuesNode {
  id: ID_Output;
  participants: ID_Output[];
  pendingParticipants: ID_Output[];
}

export interface CliqPreviousValues
  extends Promise<CliqPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  participants: () => Promise<ID_Output[]>;
  pendingParticipants: () => Promise<ID_Output[]>;
}

export interface CliqPreviousValuesSubscription
  extends Promise<AsyncIterator<CliqPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  participants: () => Promise<AsyncIterator<ID_Output[]>>;
  pendingParticipants: () => Promise<AsyncIterator<ID_Output[]>>;
}

export interface CliqSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CliqSubscriptionPayload
  extends Promise<CliqSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Cliq>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CliqPreviousValues>() => T;
}

export interface CliqSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CliqSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CliqSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CliqPreviousValuesSubscription>() => T;
}

export interface EventPreviousValuesNode {
  id: ID_Output;
  locationId?: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  eventTime?: DateTimeOutput;
  type: EventType;
  status: EventStatus;
}

export interface EventPreviousValues
  extends Promise<EventPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  locationId: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  eventTime: () => Promise<DateTimeOutput>;
  type: () => Promise<EventType>;
  status: () => Promise<EventStatus>;
}

export interface EventPreviousValuesSubscription
  extends Promise<AsyncIterator<EventPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  locationId: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  eventTime: () => Promise<AsyncIterator<DateTimeOutput>>;
  type: () => Promise<AsyncIterator<EventType>>;
  status: () => Promise<AsyncIterator<EventStatus>>;
}

export interface EventEdgeNode {
  cursor: String;
}

export interface EventEdge extends Promise<EventEdgeNode>, Fragmentable {
  node: <T = Event>() => T;
  cursor: () => Promise<String>;
}

export interface EventEdgeSubscription
  extends Promise<AsyncIterator<EventEdgeNode>>,
    Fragmentable {
  node: <T = EventSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface EventNode {
  id: ID_Output;
  locationId?: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  eventTime?: DateTimeOutput;
  type: EventType;
  status: EventStatus;
}

export interface Event extends Promise<EventNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  locationId: () => Promise<ID_Output>;
  cliq: <T = Cliq>() => T;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  eventTime: () => Promise<DateTimeOutput>;
  type: () => Promise<EventType>;
  status: () => Promise<EventStatus>;
}

export interface EventSubscription
  extends Promise<AsyncIterator<EventNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  locationId: () => Promise<AsyncIterator<ID_Output>>;
  cliq: <T = CliqSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  eventTime: () => Promise<AsyncIterator<DateTimeOutput>>;
  type: () => Promise<AsyncIterator<EventType>>;
  status: () => Promise<AsyncIterator<EventStatus>>;
}

export interface EventConnectionNode {}

export interface EventConnection
  extends Promise<EventConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<EventEdgeNode>>() => T;
  aggregate: <T = AggregateEvent>() => T;
}

export interface EventConnectionSubscription
  extends Promise<AsyncIterator<EventConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EventEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEventSubscription>() => T;
}

export interface CliqNode {
  id: ID_Output;
  participants: ID_Output[];
  pendingParticipants: ID_Output[];
}

export interface Cliq extends Promise<CliqNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  participants: () => Promise<ID_Output[]>;
  pendingParticipants: () => Promise<ID_Output[]>;
}

export interface CliqSubscription
  extends Promise<AsyncIterator<CliqNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  participants: () => Promise<AsyncIterator<ID_Output[]>>;
  pendingParticipants: () => Promise<AsyncIterator<ID_Output[]>>;
}

export interface AggregateCliqNode {
  count: Int;
}

export interface AggregateCliq
  extends Promise<AggregateCliqNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCliqSubscription
  extends Promise<AsyncIterator<AggregateCliqNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Type Defs
 */

export const prisma: Prisma;
