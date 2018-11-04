/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signup
// ====================================================

export interface signup_signup_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
}

export interface signup_signup {
  __typename: "AuthPayload";
  user: signup_signup_user;
  token: string;
}

export interface signup {
  signup: signup_signup;
}

export interface signupVariables {
  name: string;
  email: string;
  password: string;
}
