export const sendEmailNotification = async (targetEmail, content) => {
  console.log(` Enviando email a ${targetEmail}:`, content);
  // Aquí puedes integrar nodemailer o una API externa
  return { delivered: true, channel: 'email' };
};
