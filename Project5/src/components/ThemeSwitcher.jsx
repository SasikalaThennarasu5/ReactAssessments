import React from 'react';
import useTheme from '../hooks/useTheme';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="theme-switcher">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
      <span className="theme-label">
        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
