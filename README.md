# cliq

An application that helps you assemble groups to go to events in your area.

## Table of Contents

- [Getting Started](#getting-started)

| Package                                                                          | Description                                                         |
| :------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| [`clique-core`](https://github.com/abhiaiyer91/clique/tree/master/clique-core)   | Service that manages everything to do with users, events and groups |
| [`clique-ui`](https://github.com/abhiaiyer91/clique/tree/master/clique-ui)       | Front End Service                                                   |
| [`clique-types`](https://github.com/abhiaiyer91/clique/tree/master/clique-types) | Central Types Repository                                            |
| [`roxy`](https://github.com/abhiaiyer91/clique/tree/master/roxy)                 | GraphQL Proxy                                                       |

## Getting Started

Ensure you are on atleast NodeJS version `v10.0.0`.

`nvm use v10.0.0`

Make sure to `cd` into the service you want to work in and run the command below.

`yarn install --force`

## Local UI Development

For development in `clique-ui`, follow the steps below.

```bash
cd clique-types
yarn
```

Next build the GraphQL Schema

```bash
yarn build
```

Start the `mock-server`

```bash
yarn mock-server
```

Once the mock server is running, you can start the UI server.

```bash
cd clique-ui

yarn start
```

## Prisma services

For `prisma` based services follow the getting started commands below.

`npm install -g prisma`

`cd clique-__SERVICE_NAME__`

`docker-compose up -d`

`prisma deploy`

`prisma generate`
