# Donezu
> A simple todo app to get stuff ~~donezu~~

## Getting started

### Installing Dependencies

From within the server directory:
```sh
npm install
```

### Setting Environmental Variables

Create a new file called `.env` in the server folder, copy and paste:
```
NODE_ENV=development
MONGO_URI=

JWT_EXPIRATION=
JWT_SECRET=
```

### Running the server

To start the server:
```sh
npm start
```

This will start a server at http://localhost:3000/ by default (Note: The server must be restarted if any changes are made to the backend, see below for backend development)

## Development

### Running the server for backend development

To open the project for development:
```sh
npm run dev-start
```

This will run the server with Nodemon, which automatically restarts the server when any changes are made
