import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { elements } from '../data/elementsData';
import './Elements.scss';
import { setElement } from '../redux/appSlice';

const Elements = () => {
  const dispatch = useDispatch();
  const element = useSelector((state) => state.app.element);

  const handleOnClick = (name) => {
    dispatch(setElement(name));
  };

  return (
    <div className="elements_container">
      {elements.map(({ Component, color, name }) => (
        <Component
          key={color}
          className={`elements ${element === name ? '' : ' elements_inactive'}`}
          onClick={() => handleOnClick(name)}
          size="35"
          color={color}
        />
      ))}
    </div>
  );
};

export default Elements;
