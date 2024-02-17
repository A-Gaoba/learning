import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = (): void => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <header className={`App-header`}>
        <h1>React Theme Toggler</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </header>
    </div>
  );
};

export default App;
