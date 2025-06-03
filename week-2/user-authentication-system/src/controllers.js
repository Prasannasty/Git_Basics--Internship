// src/controllers.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const admin = require('./firebase');

// const registerUser  = async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
  
//   // Save user to Firebase
//   await admin.firestore().collection('users').add({
//     firstName,
//     lastName,
//     email,
//     password: hashedPassword,
//   });

//   res.status(201).send('User  registered successfully');
// };
const { db } = require('./firebase');

async function registerUser(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send('Missing required fields');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { firstName, lastName, email, password: hashedPassword };
    const docRef = await db.collection('users').add(userData);
    res.status(201).send({ id: docRef.id, ...userData });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).send({ error: 'Failed to register user', details: error.message });
  }
}

const loginUser  = async (req, res) => {
  const { email, password } = req.body;
  
  const userSnapshot = await admin.firestore().collection('users').where('email', '==', email).get();
  if (userSnapshot.empty) {
    return res.status(401).send('Invalid credentials');
  }

  const user = userSnapshot.docs[0].data();
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

const updateUser  = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  await admin.firestore().collection('users').doc(id).update({
    firstName,
    lastName,
    email,
  });

  res.send('User  updated successfully');
};

const softDeleteUser  = async (req, res) => {
  const { id } = req.params;

  await admin.firestore().collection('users').doc(id).update({
    active: false,
  });

  res.send('User  marked as inactive');
};

const hardDeleteUser  = async (req, res) => {
  const { id } = req.params;

  await admin.firestore().collection('users').doc(id).delete();
  res.send('User  deleted successfully');
};

module.exports = { registerUser , loginUser , updateUser , softDeleteUser , hardDeleteUser  };
