import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {
  fragmentCacheRedirect,
  fragmentLinkState
} from "apollo-link-state-fragment";

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      ...fragmentCacheRedirect()
    }
  }
});

export default function createClient(authToken) {
  let headers = {};

  if (!!authToken) {
    headers = {
      Authorization: `Bearer ${authToken}`
    };
  }

  return new ApolloClient({
    link: ApolloLink.from([fragmentLinkState(cache), new HttpLink()]),
    cache: new InMemoryCache(),
    headers
  });
}
