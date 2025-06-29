import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Local Storage Theme Switcher</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
