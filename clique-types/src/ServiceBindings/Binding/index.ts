import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { GraphQLSchema } from 'graphql';
import { Binding } from 'graphql-binding';
import { makeRemoteExecutableSchema } from 'graphql-tools';
import * as fetch from 'isomorphic-fetch';
import { get, keys, pick, values } from 'lodash';
import typeDefinitions from '../../typeDefinitions';

export function buildRootSchema(rootType) {
  return [...values(typeDefinitions), rootType].join(' ');
}

export class ServiceLink extends HttpLink {
  public schema: GraphQLSchema;
  constructor({ headers = {}, uri }) {
    super({
      uri,
      headers,
      fetch
    });
  }
}

export default class ServiceBinding extends Binding {
  constructor({ typeDefs, headers = {}, headersToForward = [], uri }) {
    const http = new ServiceLink({
      headers,
      uri
    });

    const link = setContext((_request, previousContext) => {
      const previousGraphQLContext = get(previousContext, 'graphqlContext');

      const contextToForward = pick(previousGraphQLContext, headersToForward);

      const headersForContext = {
        ...headers,
        ...get(previousGraphQLContext, 'headers', {}),
        ...contextToForward
      };

      return {
        headers: headersForContext
      };
    }).concat(http);

    const schema = makeRemoteExecutableSchema({
      schema: typeDefs,
      link
    });

    super({ schema });
  }

  public queryFields() {
    return keys(this.schema.getQueryType().getFields());
  }

  public mutationFields() {
    const mutationType = this.schema.getMutationType();
    return keys(mutationType && mutationType.getFields());
  }
}
