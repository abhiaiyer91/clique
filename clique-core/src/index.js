import { ApolloServer, gql } from "apollo-server-express";
import { instrumentResolvers } from '@workpop/graphql-metrics';
import express from "express";
import fs from "fs";
import { PORT } from "./settings";
import resolvers from "./resolvers";

const typeDefs = fs.readFileSync("./src/schema/schema.graphql", "utf-8");

const server = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: instrumentResolvers(resolvers),
});

apolloServer.applyMiddleware({ app: server });

server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
