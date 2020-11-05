import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { elements } from '../components/Elements/elementsData';

// On crée un context React, qu'on va utiliser partout dans l'application
const elementContext = createContext({ current: null, setColor: null });

export const ElementProvider = ({ children }) => {
  const [color, setStateColor] = useState('anemo');

  const setColor = (colorToSet) => {
    setStateColor(colorToSet);
    const cssValue = elements.find(({ name }) => name === colorToSet);
    document.documentElement.style.setProperty('--active', cssValue.color);
  };

  return (
    <elementContext.Provider value={{ current: color, setColor }}>
      {children}
    </elementContext.Provider>
  );
};

ElementProvider.defaultProps = {
  children: null,
};

ElementProvider.propTypes = {
  children: PropTypes.node,
};

export default elementContext;
