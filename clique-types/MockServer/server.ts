import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import { values } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
import mockResolvers from '../src/mockResolvers';
import RootType from '../src/RootType';
import typeDefinitions from '../src/typeDefinitions';

const schema = makeExecutableSchema({
  typeDefs: [RootType, ...values(typeDefinitions)],
  resolvers: mockResolvers,
});

const server = express();

const apolloServer = new ApolloServer({
  schema,
  formatError: (e) => {
    return {
      name: e.name,
      level: e.level,
      message: e.message,
      locations: e.locations,
      path: e.path,
    };
  },
});

apolloServer.applyMiddleware({ app: server, path: '/graphql' });

export default server;
