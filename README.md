# House Gecko

Skeleton for developing microservices application with React and Docker

Getting stated
==============

To start development run:
- `docker-compose up -d`. 
- `docker-compose run graphql-api rake db:create`

You should now be able to access the react service at
- `http://localhost:8080`

And the Rails API at
- `http://localhost:3000`

To completely stop the application and remove all associated volumes run `docker-compose down -v`

The docker compose file includes the following images:

- redis:5.0.3-alpine
- postgres:11.2

Note: These stateful services above do not have any volumes set by default to persist data. If the containers are removed associated data will be lost.

Services
========

## nginx

Reverse proxy service. The `nginx.conf` config will need to be updated with proper directives. Not configured by default, but should be setup for production configuration

## frontend

React service with webpack dev server for development and express for production. The nginx service should serve compiled assets in production and forward app requests to the express service

- `dev.Dockerfile` - Webpack dev service
- `express.Dockerfile` - Server side render using express

## graphql-api

Rails GraphQL service

## graphql-go

TODO: Implement this
