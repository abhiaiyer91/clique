import ApolloClient from "apollo-boost";

export default function createClient(authToken) {
  let headers = {};

  if (!!authToken) {
    headers = {
      Authorization: `Bearer ${authToken}`
    };
  }

  return new ApolloClient({
    uri: "http://localhost:3000/graphql",
    headers
  });
}
