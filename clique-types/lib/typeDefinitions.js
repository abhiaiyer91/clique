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
var Location = "\ntype Location {\n  id: ID!\n  url: String\n  name: String!\n  address: Address\n  avatar: String\n  rating: Float\n  reviewCount: Int\n}\n";
var AuthPayload = "\ntype AuthPayload {\n  token: String!\n  user: User!\n}\n";
var User = "\ntype User {\n  id: ID!\n  email: String!\n  name: String!\n  phone: String\n  location: Address\n}\n";
exports["default"] = {
    Address: Address,
    Location: Location,
    AuthPayload: AuthPayload,
    User: User
};
