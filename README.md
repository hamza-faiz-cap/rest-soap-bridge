<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# rest-soap-bridge

A NestJS project that acts as a bridge between REST and SOAP services. It exposes REST endpoints and communicates with a SOAP backend using `nestjs-soap`.

## Features
- REST API endpoint for calculator operations (e.g., add)
- Forwards REST requests to a SOAP backend
- Example integration with a SOAP WSDL endpoint

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Running the Application
```bash
npm run start
```

The server will start on `http://localhost:3000` by default.

### Example Usage
#### Add Operation (REST to SOAP)
- **Endpoint:** `GET /calculator/add?a=1&b=2`
- **Description:** Adds two numbers by forwarding the request to the SOAP backend.
- **Sample Request:**
  ```
  GET http://localhost:3000/calculator/add?a=1&b=2
  ```
- **Sample Response:**
  ```json
  { "result": 3 }
  ```

#### Add Operation (New Controller)
- **Endpoint:** `GET /calc/add?a=5&b=7`
- **Description:** Adds two numbers using the new AddController.
- **Sample Request:**
  ```
  GET http://localhost:3000/calc/add?a=5&b=7
  ```
- **Sample Response:**
  ```json
  { "result": 12 }
  ```

### Configuration
- The SOAP client is configured in `app.module.ts`:
  ```typescript
  SoapModule.register({
    clientName: 'SPRING_SOAP_CLIENT',
    uri: 'http://MALFK0700000508:8088/mockCalculatorSoap?wsdl',
  })
  ```
- Update the `uri` to point to your actual SOAP WSDL endpoint if needed.

## Testing
You can test the REST endpoints using Postman or curl.

## License
MIT
