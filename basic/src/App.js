import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('');

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
      <button className="red" onClick={() => changeBackground('red')}>Red</button>
      <button className="green" onClick={() => changeBackground('green')}>Green</button>
      <button className="blue" onClick={() => changeBackground('blue')}>Blue</button>
    </div>
  );
}

export default App;
