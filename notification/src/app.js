import express from 'express';
import notifyRouter from './routes/notify.js';
import './events/redisSubscriber.js';

const app = express();
app.use(express.json());

app.use('/api/notify', notifyRouter);

export default app;
