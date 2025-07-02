import Redis from 'ioredis';
import { emitToRoom } from '../sockets/messageSocket.js';

const redis = new Redis(process.env.REDIS_URL);

redis.subscribe('chat-events', () => {
  console.log(' Subscrito a canal chat-events');
});

redis.on('message', (channel, message) => {
  if (channel === 'chat-events') {
    const { room, content } = JSON.parse(message);
    console.log(` Redis -> Emitiendo mensaje a ${room}`);
    emitToRoom(room, content);
  }
});
