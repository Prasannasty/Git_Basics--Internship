// Assuming you downloaded the file to 'path/to/your/serviceAccountKey.json'
// and your Realtime Database URL is like 'https://YOUR_DATABASE_NAME.firebaseio.com'
// For your project 'taskmanager-9f1cf', your DB URL would be something like
// 'https://taskmanager-9f1cf-default-rtdb.firebaseio.com'
// (Check the Realtime Database section in the console for the exact URL)

import * as admin from 'firebase-admin';

// Fetch the service account key JSON file contents
import serviceAccount from 'path/to/your.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://taskmanager-9f1cf-default-rtdb.firebaseio.com' // <-- Use YOUR database URL here
  // You can optionally add databaseAuthVariableOverride if you want
  // the Admin SDK to emulate a specific user for security rule testing
  // databaseAuthVariableOverride: { uid: 'my-custom-uid' }
});

// Now you can get a reference to your database
const db = admin.database();

// And start interacting with it
const ref = db.ref('/some_path_in_your_database');

ref.once('value', (snapshot) => {
  console.log('Data received:', snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

// Or write data
ref.set({ data: 'Hello from local script!' })
  .then(() => console.log('Data written successfully!'))
  .catch((error) => console.error('Data write failed:', error));
