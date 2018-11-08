import { ApolloServer, gql } from "apollo-server-express";
import { instrumentResolvers } from "@workpop/graphql-metrics";
import CoreBinding from "@cliquelabs/types/lib/ServiceBindings/CoreBinding";
import express from "express";
import fs from "fs";
import { prisma } from "./generated/prisma-client";
import { PORT } from "./settings";
import resolvers from "./resolvers";
import typeDefs from "./schema";
import logger, { logLevels } from "./logger";

const server = express();

const instrumentedResolvers = instrumentResolvers({
  resolvers,
  logLevels,
  logFunc: (logLevel, ...args) => {
    return logger[logLevel](...args);
  }
});

const apolloServer = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers: instrumentedResolvers,
  context: ({ req }) => {
    return {
      db: prisma,
      userId: req.headers["x-userid"],
      coreServiceClient: CoreBinding({
        uri: "http://localhost:1337/graphql",
        headersToForward: []
      })
    };
  }
});

apolloServer.applyMiddleware({ app: server });

server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
