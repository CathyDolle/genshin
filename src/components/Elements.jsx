import React, { useContext } from 'react';
import colorContext from '../contexts/element';
import { elements } from '../data/elementsData';

const Elements = () => {
  const { current, setColor } = useContext(colorContext);

  return (
    <div className="elements_container">
      {elements.map(({ Component, color, name }) => (
        <Component
          key={color}
          className={`elements ${current === name ? '' : ' elements_inactive'}`}
          onClick={() => setColor(name)}
          size="35"
          color={color}
        />
      ))}
    </div>
  );
};

export default Elements;
