## What is Heimdall.dev

Heimdall.dev is a developer portal designed to enable interactions with Heimdall API to create a development environment, providing documentation, updates history and available API services. In the portal it's possible consume the API through Swagger, but App's must be created with valid credentials in Heimdall.dev.

## Features
 * Manage App's;
 * API documentation;
 * Requests to endpoints;
 * See updates history of the API;
 * Developer register and authentication.

## Usage

### Required settings

 * Heimdall API and Gateway must be running. Click [here](https://github.com/getheimdall/heimdall#usage) to see how do this;

If Environment, API or default plan not exist, will need create them

 * Create an environment with name, description, inboundURL and outboundURL;
 * Create an API e select a previously created environment;
 * Create a plan with name, description, the API name and remember to SELECT this plan as default plan.

### Clone the project

```sh
$ git clone https://github.com/getheimdall/developer-portal.git && cd developer-portal
```

* Update the variables in files .env and .env.production that are located inside the project root with the required settings created in Heimdall API.

### Developer mode

#### Requirements

 * Node https://nodejs.org/

Open your terminal and run this commands.

To run the application in dev mode: 

```sh
$ npm run dev
```

To build the application and run in pre-production mode:

```sh
$ npm run build:hmlg && npm run start
```

To build the application and run in production mode:

```sh
$ npm run build && npm run start
```

With application started, open your browser with this URL: 

 * http://localhost:3000

### Docker mode

#### Requirements

 * Docker https://www.docker.com/
 * Docker Compose https://docs.docker.com/compose/

 To run the project using Docker, execute this command:

```sh
$ docker-compose up -d
```
- It is worth mentioning that this command creates the image using the production values.

With the image created and the container started, open your browser with this URL:

 * http://localhost:3000