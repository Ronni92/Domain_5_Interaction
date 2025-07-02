import express from 'express';
import './observers/redisObserver.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Admin Panel Service OK');
});

export default app;
