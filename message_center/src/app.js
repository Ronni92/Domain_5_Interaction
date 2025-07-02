import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { configureSocket } from './sockets/messageSocket.js';
import './observers/socketObserver.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

configureSocket(io);

export { server };
export default app;
