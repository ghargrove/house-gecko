# House Gecko

Skeleton for microservices application with React and Docker

To start development run `docker-compose up`.

The docker compose file includes the following images:

- redis:5.0.3-alpine
- postgres:11.2

Services
========

## nginx

Reverse proxy service. The `nginx.conf` config will need to be updated with proper directives.

## frontend

- `dev.Dockerfile` - Webpack dev service
- `express.Dockerfile` - Server side render using express

## graphql-api

Rails GraphQL service

## graphql-go

TODO: Implement this
