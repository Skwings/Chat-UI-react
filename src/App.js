import React from 'react';
import './App.css';
import Button from './Button.js'
import useColorSwitch from './useColorSwitch';

function App() {
  const [color, handleClick] = useColorSwitch('red', 'black');

  return (
    <div>
      <Button label="按钮" handleClick = {handleClick}>
        <span>&gt;</span>
      </Button>
      <p style={{ color }}>这是一段文本</p>
    </div>
  );
}

export default App;
