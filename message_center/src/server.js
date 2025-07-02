import app, { server } from './app.js';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3005;

server.listen(port, () => {
  console.log(`Message Center escuchando en el puerto ${port}`);
});
