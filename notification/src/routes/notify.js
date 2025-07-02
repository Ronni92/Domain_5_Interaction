import express from 'express';
import { handleNotification } from '../strategies/webhookStrategy.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const result = await handleNotification(req.body);
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
