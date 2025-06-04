import React, { useState, useEffect } from 'react';
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
    <div className="container">
      <h2>Counter & Input App</h2>

      <div className="counter">
        <button onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <p> Last counter change: {timestamp}</p>

      <div className="input">
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={handleChange}
        />
        <p>You typed: {text}</p>
      </div>

      <button onClick={resetAll} className="reset-btn">Reset</button>
    </div>
  );
};

export default CounterInputApp;
