const admin = require('firebase-admin');
const serviceAccount = require('./config.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://task-app-736ea.firebaseio.com'
  });
}

const db = admin.firestore();

module.exports = db;