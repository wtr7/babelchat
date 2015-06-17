import http from 'http';
import './library/config/db_init.js';
import fs from 'fs';
import express from 'express';
import socketio from 'socket.io';
import express_config from './library/config/express';
import routes_config from './library/routes';
import SocketConnections from './library/controllers/SocketConnections.js';

const app = express();
express_config(app);
routes_config(app);

const port = process.env.PORT || 3000;
const ip = '127.0.0.1';
const env = process.env.NODE_ENV || 'development';

const server = http.createServer(app).listen(port, function() {
	console.log(`Running in [${env}] on ${ip}:${port}`);
});

const io = socketio.listen(server);
const sockets = new SocketConnections(io).listen();

export default app;