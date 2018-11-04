import { ApolloServer, gql } from "apollo-server-express";
import { instrumentResolvers } from "@workpop/graphql-metrics";
import express from "express";
import fs from "fs";
import { prisma } from "./generated/prisma-client";
import { PORT } from "./settings";
import resolvers from "./resolvers";
import logger, { logLevels } from "./logger";
import typeDefs from "./schema";

const server = express();

const instrumentedResolvers = instrumentResolvers({
  resolvers,
  logLevels,
  logFunc: (logLevel, ...args) => {
    return logger[logLevel](...args);
  }
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: instrumentedResolvers,
  context: ({ req }) => {
    return {
      db: prisma,
      userId: req.headers['x-userid'],
    };
  }
});

apolloServer.applyMiddleware({ app: server });

server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
