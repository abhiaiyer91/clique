import { get, reduce } from 'lodash';

/**
 * Turn a GraphQL Binding into a resolver function for a GraphQL Server
 */
function createResolver(fields, query) {
  return reduce(
    fields,
    (memo, currentVal) => {
      return {
        ...memo,
        [currentVal]: async (root, args, context, info) => {
          return query[currentVal](args, info, { context });
        },
      };
    },
    {},
  );
}

/**
 * Take a configuration of GraphQL bindings and create a Root resolver object
 * We can then use this to create a GraphQL server
 */
export default function createServiceResolvers(config) {
  // Get Query Fields
  const serviceQueries = reduce(
    config,
    (memo, currentVal) => {
      const fields = currentVal.queryFields();
      return {
        ...memo,
        ...createResolver(fields, get(currentVal, 'query')),
      };
    },
    {},
  );
  // Mutation Fields
  const serviceMutations = reduce(
    config,
    (memo, currentVal) => {
      const fields = currentVal.mutationFields();
      return {
        ...memo,
        ...createResolver(fields, get(currentVal, 'mutation')),
      };
    },
    {},
  );

  return {
    Query: serviceQueries,
    Mutation: serviceMutations,
  };
}
