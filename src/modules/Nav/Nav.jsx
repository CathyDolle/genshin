import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Nav.scss';
import colorContext from '../../contexts/element';
import { elements } from '../../data/elementsData';

const Nav = () => {
  const { current } = useContext(colorContext);
  const CurrentElement = elements.find(({ name }) => current === name);
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <nav>
      <CurrentElement.Component
        className="logo"
        size="40"
        color={CurrentElement.color}
        onClick={handleClick}
      />
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/guides">Guides</NavLink>
      <NavLink to="/dailies">Dailies</NavLink>
      <NavLink to="/indispensables">Indispensables</NavLink>
      <NavLink to="/news">News</NavLink>
    </nav>
  );
};

export default Nav;
