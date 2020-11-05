import { createContext, useState } from 'react';
import { elements } from '../components/Elements';

// On crée un context React, qu'on va utiliser partout dans l'application
const elementContext = createContext({ current: null, setColor: null });

export const ElementProvider = ({ children }) => {
  const [color, setStateColor] = useState('anemo');

  const setColor = (color) => {
    setStateColor(color);
    const cssValue = elements.find(({ name }) => name === color);
    document.documentElement.style.setProperty('--active', cssValue.color);
  };

  return (
    <elementContext.Provider value={{ current: color, setColor }}>
      {children}
    </elementContext.Provider>
  );
};

export default elementContext;
