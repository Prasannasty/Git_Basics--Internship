import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import './CounterInputApp.css';

const CounterInputApp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const now = new Date().toLocaleTimeString();
    setTimestamp(now);
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const handleChange = (e) => setText(e.target.value);
  const resetAll = () => {
    setCount(0);
    setText('');
    setTimestamp('');
  };

  return (
    <Card
      sx={{
        maxWidth: 420,
        width: '100%',
        borderRadius: 4,
        boxShadow: 6,
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <CardContent sx={{ padding: '30px 32px' }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Counter & Input App
        </Typography>

        <div className="counter">
          <button onClick={decrement}>-</button>
          <span className="count">{count}</span>
          <button onClick={increment}>+</button>
        </div>

        <Typography variant="body2" sx={{ color: '#666', marginBottom: 2 }}>
          Last counter change: {timestamp || 'N/A'}
        </Typography>

        <div className="input">
          <input
            type="text"
            placeholder="Type something..."
            value={text}
            onChange={handleChange}
          />
          <p>You typed: {text || 'Nothing yet'}</p>
        </div>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center', marginBottom: 2 }}>
        <button className="reset-btn" onClick={resetAll}>Reset</button>
      </CardActions>
    </Card>
  );
};

export default CounterInputApp;
