const axios = require('axios');

// Base Firebase Realtime Database URL (without .json or auth here)
const BASE_URL = 'https://taskmanager-9f1cf-default-rtdb.firebaseio.com';

// Firebase Web API Key (used for auth parameter)
const FIREBASE_AUTH = 'AIzaSyDyfKhnJx4lfflJESwqA-hg9riyo2ynmFM';

// Save (PUT) user data
const saveUser = async (id, userData) => {
    try {
        await axios.put(`${BASE_URL}/users/${id}.json?auth=${FIREBASE_AUTH}`, userData);
        console.log(`User ${id} saved.`);
    } catch (error) {
        console.error('Error saving user:', error.response?.data || error.message);
    }
};

// Get user data
const getUser = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}/users/${id}.json?auth=${FIREBASE_AUTH}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching user:', error.response?.data || error.message);
        return null;
    }
};

// Delete user
const deleteUser = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/users/${id}.json?auth=${FIREBASE_AUTH}`);
        console.log(`User ${id} deleted.`);
    } catch (error) {
        console.error('Error deleting user:', error.response?.data || error.message);
    }
};

// Export functions
module.exports = {
    saveUser,
    getUser,
    deleteUser,
    removeUser: deleteUser
};
