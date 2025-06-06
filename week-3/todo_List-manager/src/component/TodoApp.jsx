import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Switch,
  Breadcrumbs,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import '../styles/TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
  ]);
  const [input, setInput] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);
const [viewMode, setViewMode] = useState('incomplete');

  const handleAddTodo = (e) => {
    e.preventDefault(); 
    if (input.trim() === '') {
      alert('Please enter a todo item');
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]); 
    setInput('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleCompletedVisibility = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTodos = (() => {
    switch (viewMode) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'incomplete':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  })();

  const renderTodoList = (list) => (
    <Box component="ul" className="todo-list" sx={{ p: 0, mt: 2 }}>
      {list.map((todo) => (
        <Paper
          key={todo.id}
          component="li"
          elevation={2}
          sx={{
            p: 1.5,
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              textDecoration: todo.completed ? 'line-through' : 'none',
              flexGrow: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              userSelect: 'none',
            }}
          >
            {todo.text}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ flexShrink: 0 }}
          >
            <Switch
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              inputProps={{ 'aria-label': 'Toggle complete' }}
              size="small"
            />
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDelete(todo.id)}
              sx={{
                minWidth: 'auto',
                padding: '6px',
              }}
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </Stack>
        </Paper>
      ))}
    </Box>
  );

  return (
    <Box
      className="todo-container"
      sx={{
        maxWidth: 600,
        margin: 'auto',
        mt: 5,
        p: 3,
        bgcolor: '#efe1e1',
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Todo List
      </Typography>

      <form onSubmit={handleAddTodo}>
        <Stack
          direction="row"
          spacing={2}
          className="input-group"
          sx={{ mb: 2, alignItems: 'center' }}
        >
          <TextField
            label="Add a new todo..."
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{ flexGrow: 1 }}
            size="medium"
          />
          <Button
            type="submit" 
            variant="contained"
            size="small"
            sx={{
              minWidth: '36px',
              height: '36px',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </Stack>
      </form>

      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 1 }}>
        <Typography
          color={viewMode === 'incomplete' ? 'primary' : 'text.primary'}
          sx={{ cursor: 'pointer' }}
          onClick={() => setViewMode('incomplete')}
        >
          Tasks
        </Typography>
        <Typography
          color={viewMode === 'completed' ? 'primary' : 'text.primary'}
          sx={{ cursor: 'pointer' }}
          onClick={() => setViewMode('completed')}
        >
          Completed Tasks
        </Typography>
      </Breadcrumbs>

      {renderTodoList(filteredTodos)}

      {(viewMode === 'all' || viewMode === 'incomplete') && (
        <Button
          variant="outlined"
          onClick={toggleCompletedVisibility}
          className="toggle-button"
          sx={{ mt: 2, width: '100%' }}
        >
          {showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks'}
        </Button>
      )}

      {showCompleted && viewMode !== 'completed' && (
        <Box className="completed-section" sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Completed Tasks
          </Typography>
          {renderTodoList(todos.filter((todo) => todo.completed))}
        </Box>
      )}
    </Box>
  );
};

export default TodoApp;
