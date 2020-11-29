import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import './Nav.scss';
import { elements } from '../../data/elementsData';
import Theme from './Theme';
import { getElementData } from '../../redux/appSlice';

const Nav = () => {
  const element = useSelector(getElementData);
  const CurrentElement = elements.find(({ name }) => element === name);
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <nav>
      {CurrentElement && (
      <CurrentElement.Component
        className="logo"
        size="40"
        color={CurrentElement.color}
        onClick={handleClick}
      />
      )}
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/guides">Guides</NavLink>
      <NavLink to="/dailies">Dailies</NavLink>
      <NavLink to="/indispensables">Indispensables</NavLink>
      <NavLink to="/news">News</NavLink>
      <Theme />
    </nav>
  );
};

export default Nav;
