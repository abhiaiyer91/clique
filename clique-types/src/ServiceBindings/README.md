# Service Bindings

The `ServiceBinding` class is used to create [`GraphQL Bindings`](https://github.com/graphql-binding/graphql-binding).

## Background

GraphQL bindings takes a GraphQL endpoint and turns it into an SDK that can be used inside another application. A common parallel to a GraphQL binding can be considered a `GraphQL-Aware` API client.

## Creating a Binding

The example below shows creating a binding for a Service called `jobs`, deployed to `Kubernetes`.

```ts
// src/ServiceBindings/JobsBinding.ts

import ServiceBinding from "./Binding";

// Or import this from a .graphql file
const typeDefs = `
    type User {
        id: ID!
    }

    type Job {
        id: ID!
        hiringManager: User
    }

    type Query {
        jobPost(id: ID!): Job
    }
`;

export default function createJobBinding({ uri }) {
  return new ServiceBinding({
    uri,
    headersToForward: ["x-csod-user-id"]
  });
}
```

## Configuring in your service

You can import your binding and use it within another GraphQL Server, Webhook, or REST API.
Below is an example of using your binding in a simple ExpressJS server.

```ts
import express from "express";
import createJobBinding from "@workpop/frontline-types/lib/ServiceBindings/createJobBinding";

const server = express();

const jobServiceClient = createJobBinding({
  uri: "http://jobs-svc/graphql/jobs"
});

server.get("/jobs/:id", async (req, res) => {
  const userId = req.userId;

  const projection = `
        {
            id
            hiringManager {
                id
            }
        }
    `;

  const job = await jobServiceClient.query.jobPost(
    {
      id: req.params.id
    },
    projection,
    {
      context: {
        "x-csod-user-id": userId
      }
    }
  );

  return res.json(job);
});

server.listen(1337, () => {
  console.log("Running");
});
```
