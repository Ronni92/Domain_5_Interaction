const admin = require('../../firebaseConfig');

module.exports = class PushStrategy {
  enviar(notificacion) {
    // Configuración de la notificación
    const message = {
      notification: {
        title: notificacion.titulo,
        body: notificacion.mensaje,
      },
      token: notificacion.token,  // Token del dispositivo receptor
    };

    // Enviar la notificación a un dispositivo
    admin.messaging().send(message)
      .then((response) => {
        console.log("Notificación enviada con éxito:", response);
      })
      .catch((error) => {
        console.error("Error al enviar notificación:", error);
      });
  }
};
