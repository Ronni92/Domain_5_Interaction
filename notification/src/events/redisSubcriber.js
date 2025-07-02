import Redis from 'ioredis';
import { handleNotification } from '../strategies/webhookStrategy.js';

const redis = new Redis(process.env.REDIS_URL);

redis.subscribe('notifications', () => {
  console.log('Subscribed to notifications channel');
});

redis.on('message', async (channel, message) => {
  if (channel === 'notifications') {
    const data = JSON.parse(message);
    await handleNotification(data);
  }
});
