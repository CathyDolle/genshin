import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Elements from './Elements/Elements';
import { elements } from './Elements/elementsData';
import './Wrapper.scss';
import Nav from './Nav';
import colorContext from '../contexts/element';

const Wrapper = ({ children }) => {
  const { current } = useContext(colorContext);
  const CurrentElement = elements.find(({ name }) => current === name);

  return (
    <section className="wrapper">
      <CurrentElement.Component
        className="watermark"
        size="45%"
        color={CurrentElement.color}
      />
      <Nav />
      <div className="container">{children}</div>
      <Elements />
      <div className="shadow" />
      <footer>
        <p>copyright machin truc</p>
      </footer>
    </section>
  );
};

Wrapper.defaultProps = {
  children: null,
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
