const express = require('express');
const bodyParser = require('body-parser');
const NotificationService = require('./src/services/notificationService');
const PushStrategy = require('./src/strategy/pushStrategy');

const app = express();
app.use(bodyParser.json());

app.post('/webhook/notificacion', (req, res) => {
  const datos = req.body;

  const servicio = new NotificationService(new PushStrategy());
  servicio.enviar(datos);

  res.status(200).send('Notificación procesada');
});

app.listen(3000, () => console.log("Microservicio de notificaciones corriendo en puerto 3000"));
