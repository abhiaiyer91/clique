# Roxy - GraphQL Gateway

## Background

One of the many reasons engineers love GraphQL is it's ability to query multiple data sources in one request. As engineering teams
move away from the traditional "REST" architecture, opportunities for new `GraphQL Native` applications become possible. As you start
building out a distributed system with GraphQL the need for a short develop to deploy cycle becomes crucial. In a microservice architecture
with GraphQL, each service owns a GraphQL schema, a slice of the overall system's APIs. The `Roxy` service uses the concept of [schema-delegation](https://www.prisma.io/blog/graphql-schema-stitching-explained-schema-delegation-4c6caf468405/) to combine multiple GraphQL schemas from different GraphQL servers to create a GraphQL Gateway.

GraphQL Gateways expose a single entry point to query your entire system.



![GraphQLGateway](https://cdn-images-1.medium.com/max/1600/1*bIs4BAGs1hqpWuT_TAgO6A.png)



## Getting Started

```bash
git clone git@github.com:Workpop/frontline.git
cd packages/roxy
```

```bash
yarn
yarn start
```

## Setup

To create a GraphQL gateway you will need 2 things:

- A map of [GraphQL Bindings](https://medium.com/open-graphql/graphql-bindings-for-service-to-service-communication-d1e89df66ecd)
- `typeDefinitions` - the collection of type definitions used across your system

### Config

You can create a service config with this shape:

```ts
type ServiceConfig {
 [serviceName: string]: GraphQLBinding
}
```

### Creating the Gateway

#### `createGateway`

- `config` - the service config for your gateway
- `server` - the server instance (currently supports [expressjs](https://expressjs.com/))
- `typeDefinitions` - the collection of type definitions used across your system and the `RootType`
- `headersToForward` - header keys you would like to forward to services downstream

```ts
import express from "express";
import createGateway from "./createGateway";
import typeDefinitions from "./typeDefinitions";

const config = {
  Jobs: GraphQLBinding
};

// Create an express server instance
const server = express();

createGateway({
  config,
  typeDefinitions,
  server,
  headersToForward: ["x-csod-user-id"]
});

server.listen(3020, () => {
  console.log(`🚀  Server ready.`);
});
```

You can open the GraphQL playground at http://localhost:3020/graphql

## Schema Delegation

When the Roxy service receives an incoming HTTP request it `parses` the request body for a GraphQL query. During the `execution` phase it `delegates` or `forwards` the GraphQL Query document to the GraphQL service that owns it. 

[`GraphQL Bindings`](https://github.com/graphql-binding/graphql-binding) are modular building blocks that allow you to embed existing GraphQL APIs into a GraphQL server. This makes it extremely easy to access data from various GraphQL sources and integrate them into a single GraphQL API. 

The Roxy service uses GraphQL Bindings to create access points to every service in your config.
