import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeSwitch = () => {
  // State to manage the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to apply the theme on initial render
  useEffect(() => {
    const initialTheme = localStorage.getItem('theme');
    if (initialTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Effect to update the theme in localStorage and add/remove class to the HTML element
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    // Add or remove 'dark' class to the HTML element based on the theme state
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className="theme-switch dark:bg-blue-900 bg-slate-100 px-3 py-2 rounded-lg cursor-pointer"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
       <DarkModeSwitch
          checked={ isDarkMode }
          onChange={ toggleTheme }
          size={20}
          moonColor={ 'white' }
          sunColor={ 'orange' }
        />
    </div>
  );
};

export default ThemeSwitch;
