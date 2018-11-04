declare const _default: "\nschema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  locations(searchText: String!): [Location]\n  me: User\n  friends: [User]\n}\n\ntype Mutation {\n  signup(name: String!, email: String!, password: String!): AuthPayload!\n  login(email: String!, password: String!): AuthPayload!\n}\n";
export default _default;
