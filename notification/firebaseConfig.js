const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json'); // Asegúrate de que el nombre del archivo coincida con el que descargaste

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
