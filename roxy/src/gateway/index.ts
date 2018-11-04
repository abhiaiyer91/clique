import { instrumentResolvers } from '@workpop/graphql-metrics';
import { ApolloServer, gql } from 'apollo-server-express';
import { pick } from 'lodash';
import { getLogger } from 'log4js';

import createServiceResolvers from './createServiceResolvers';

const logLevels = {
  INFO: 'info',
  ERROR: 'error',
  WARNING: 'warning',
  TRACE: 'trace',
};

export default async function createGateway({ config, server, typeDefinitions, headersToForward }) {
  const logger = getLogger('graphql:gateway');
  logger.level = 'debug';

  const resolvers = createServiceResolvers(config);

  const instrumentedResolvers = instrumentResolvers({
    resolvers,
    logLevels,
    logFunc: (logLevel, ...args) => {
      return logger[logLevel](...args);
    },
  });

  // TODO: ADD PROPER CONTEXT OBJECT
  const graphQLServer = new ApolloServer({
    typeDefs: gql(typeDefinitions),
    resolvers: instrumentedResolvers,
    context: ({ req }) => {
      const forwardHeaders = headersToForward && pick(req.headers, ...headersToForward);
      return {
        headers: {
          ...forwardHeaders,
        },
      };
    },
  });

  graphQLServer.applyMiddleware({ app: server });
}
