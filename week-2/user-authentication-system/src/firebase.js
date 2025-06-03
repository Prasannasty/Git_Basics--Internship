// // src/firebase.js
// const admin = require('firebase-admin');
// const path = require('path');
// const serviceAccount = require(path.join(__dirname, 'serviceAccountKey.json'));


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
//   // databaseURL: "https://taskmanager-9f1cf.firebaseio.com" // Update with your Firebase database URL
// });

// module.exports = admin;


const admin = require('firebase-admin');
const path = require('path');

const serviceAccount = require(path.join(__dirname, 'serviceAccountKey.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { admin, db };
