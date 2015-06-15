process.env.NODE_ENV = 'development';

import http from 'http';
import './library/config/db_init.js';
import fs from 'fs';
import express from 'express';
import socketio from 'socket.io';
import express_config from './library/config/express';
import routes_config from './library/routes';
import SocketConnections from './library/controllers/SocketConnections.js';

let app = express();
express_config(app);
routes_config(app);

let port = process.env.PORT || 3000;
let server = http.createServer(app).listen(port, function() {
	console.log(`[${process.env.NODE_ENV}]:${port}`);
});

let io = socketio.listen(server);
let sockets = new SocketConnections(io).listen();

export default app;