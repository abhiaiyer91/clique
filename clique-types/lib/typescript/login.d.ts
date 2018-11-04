export interface login_login_user {
    __typename: "User";
    id: string;
    name: string;
    email: string;
}
export interface login_login {
    __typename: "AuthPayload";
    user: login_login_user;
    token: string;
}
export interface login {
    login: login_login;
}
export interface loginVariables {
    email: string;
    password: string;
}
