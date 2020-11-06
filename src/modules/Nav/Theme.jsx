import React, { useState } from 'react';
import night from '../../assets/images/logo/night.svg';
import day from '../../assets/images/logo/day.svg';

const Theme = () => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    document.documentElement.setAttribute('data-Theme', !theme);
    setTheme(!theme);
  };

  return (
    <button type="button" onClick={toggleTheme}><img src={theme ? night : day} className="mode" alt="mode" /></button>
  );
};

export default Theme;
