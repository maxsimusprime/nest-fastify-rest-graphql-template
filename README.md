# nest-fastify-rest-graphql-template

### Template for Nest.js app with Fastify, GraphQL, REST Api, Swagger

- Template is using npm as package manager


### Setup

- Clone git repository from develop branch
- Run `npm ci` command
- Create `.env` file based on `.env.example`
- Setup Docker Desktop on windows and docker with docker-compose
- run `docker-compose up -d` in root app folder
- run `npx prisma migrate dev --name init`


# Usage

- Run application in development mode by command `npm run dev`
- Use `localhost:PORT/api` in order to use Swagger documentation (in development mode only)
- Use `localhost:PORT/graphql` to use GraphQL playground (in development mode only)
