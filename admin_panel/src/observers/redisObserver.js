import Redis from 'ioredis';
import { handleStatsUpdate } from '../dashboards/stats.js';

const redis = new Redis(process.env.REDIS_URL);

redis.subscribe('admin-events', () => {
  console.log(' Subscrito a canal admin-events');
});

redis.on('message', async (channel, message) => {
  if (channel === 'admin-events') {
    const data = JSON.parse(message);
    console.log(' Evento recibido:', data);
    await handleStatsUpdate(data);
  }
});
