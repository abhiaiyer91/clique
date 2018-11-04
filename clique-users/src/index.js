import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import fs from "fs";
import { prisma } from "./generated/prisma-client";
import { PORT } from "./settings";
import resolvers from "./resolvers";
import typeDefs from "./schema";

const server = express();

const apolloServer = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: {
    db: prisma,
  }
});

apolloServer.applyMiddleware({ app: server });

server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
