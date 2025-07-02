export const sendPushNotification = async (deviceId, content) => {
  console.log(` Enviando notificación push a ${deviceId}:`, content);
  // Aquí puedes integrar Firebase Cloud Messaging (FCM) u otro servicio
  return { delivered: true, channel: 'push' };
};
