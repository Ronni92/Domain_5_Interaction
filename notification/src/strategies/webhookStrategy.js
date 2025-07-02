import { sendEmailNotification } from './emailStrategy.js';
import { sendPushNotification } from './pushStrategy.js';

export const handleNotification = async ({ type, target, data }) => {
  switch (type) {
    case 'email':
      return await sendEmailNotification(target, data);
    case 'push':
      return await sendPushNotification(target, data);
    case 'webhook':
      console.log(` Enviando WebHook a ${target}`, data);
      return { delivered: true, channel: 'webhook' };
    default:
      throw new Error(`Tipo de notificación no soportado: ${type}`);
  }
};
