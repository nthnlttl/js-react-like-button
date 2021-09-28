import logo from './logo.svg';
import './App.css';
import React, {useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}> {count} likes</button>
  )
}

export default App;
