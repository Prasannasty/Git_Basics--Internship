const {hashPassword,comparePassword} = require('../utils/hash');
const {saveUser, getUser, deleteUser: deleteUserFromDb, removeUser} = require('../services/firebaseService');
const {generateToken} = require('../utils/jwt');
const {v4:uuidv4}=require('uuid');
const axios= require('axios');

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if email already exists
        let users = {};
        try {
            const response = await axios.get(`${process.env.FIREBASE_URL}/users.json`);
            users = response.data || {};
        } catch (error) {
            if (error.response && error.response.status === 404) {
                // No users node yet, treat as empty users
                users = {};
            } else {
                throw error;
            }
        }
        const emailExists = Object.values(users).some(user => user.email === email);
        if (emailExists) return res.status(400).json({ error: 'Email already registered' });

        const hashed = await hashPassword(password);
        const id = uuidv4();
        await saveUser(id, { firstName, lastName, email, password: hashed, active: true });
        res.status(201).json({ message: 'User registered successfully ' });
    } catch (err) {
        console.error('Error in register:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let users = {};
    try {
      const response = await axios.get(`${process.env.FIREBASE_URL}/users.json`);
      users = response.data || {};
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // No users node yet, treat as empty users
        users = {};
      } else {
        throw error;
      }
    }
    const userEntry = Object.entries(users).find(([, user]) => user.email === email && user.active !== false);
    if (!userEntry) return res.status(401).json({ error: 'invalid credentials' });
    const [id, user] = userEntry;
    const valid = await comparePassword(password, user.password);
    if (!valid) return res.status(401).json({ error: 'invalid credentials' });
    const token = generateToken({ id, email });
    res.status(200).json({ token });
  } catch (err) {
    console.error('Error in login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    const updatedUser = { ...user, ...req.body };
    await saveUser(id, updatedUser);
    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (err) {
    console.error('Error in updateUser:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const markInactive = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getUser(id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        user.active = false;
        await saveUser(id, user);
        res.json({ message: 'User marked as inactive', user });
    } catch (err) {
        console.error('Error in markInactive:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await removeUser(id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error('Error in deleteUser:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    register,
    login,
    updateUser,
    markInactive,
    deleteUser
};
