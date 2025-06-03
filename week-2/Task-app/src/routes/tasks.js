const express = require('express');
const router = express.Router();
const db = require('../firebase/config'); 

router.post('/tasks', async (req, res) => {
  console.log('POST /api/tasks/tasks', req.body); 
  try {
    const task = req.body;
    const docRef = await db.collection('tasks').add(task);
    res.status(201).send({ id: docRef.id, ...task });
  } catch (error) {
    console.error(error); 
    res.status(500).send(error);
  }
});

// Get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const snapshot = await db.collection('tasks').get();
    const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(tasks); 
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('tasks').doc(id).update(req.body);
    res.status(200).send({ id, ...req.body });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('tasks').doc(id).delete();
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;