"use strict";
/******************************************************************************
 *
 * DO NOT EDIT THIS FILE.
 *
 * The contents of this file were generated by generateTypeDefinitions.ts
 *
 ******************************************************************************/
exports.__esModule = true;
var Address = "\ntype Address {\n  address1: String\n  address2: String\n  address3: String\n  city: String\n  zipcode: String\n  country: String\n  state: String\n}\n";
var Event = "\ntype Event {\n  id: ID!\n  cliqId: ID!\n  participants: [User]\n  location: Location\n  eventTime: Float\n  type: EventType!\n  status: EventStatus!\n}\n";
var EventStatus = "\nenum EventStatus {\n  COMPLETED\n  PLANNED\n  INCOMPLETE\n  CANCELLED\n}\n";
var EventType = "\nenum EventType {\n  HAPPY_HOUR\n}\n";
var Location = "\ntype Location {\n  id: ID!\n  url: String\n  name: String!\n  address: Address\n  avatar: String\n  rating: Float\n  reviewCount: Int\n}\n";
var AuthPayload = "\ntype AuthPayload {\n  token: String!\n  user: User!\n}\n";
var Invitation = "\ntype Invitation {\n  id: ID!\n  eventId: ID!\n  name: String!\n  email: String!\n  inviterName: String!\n}\n";
var InvitationEventPayload = "\ntype InvitationEventPayload {\n  id: ID!\n  name: String\n  inviter: User\n  event: Event\n}\n";
var InvitationPayload = "\ntype InvitationPayload {\n  token: String!\n  eventId: String!\n}\n";
var User = "\ntype User {\n  id: ID!\n  email: String!\n  avatar: String\n  name: String!\n  phone: String\n  location: Address\n}\n";
exports["default"] = {
    Address: Address,
    Event: Event,
    EventStatus: EventStatus,
    EventType: EventType,
    Location: Location,
    AuthPayload: AuthPayload,
    Invitation: Invitation,
    InvitationEventPayload: InvitationEventPayload,
    InvitationPayload: InvitationPayload,
    User: User
};
