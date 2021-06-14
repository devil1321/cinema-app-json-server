const jsonServer = require('json-server');
const express = require('express')
const cors = require('cors')
const server = jsonServer.create();
const router = jsonServer.router('movies.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

const app = express()
app.use(cors())
server.use(middlewares);
server.use(router);

server.listen(port);