import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Elements from '../../components/Elements';
import { elements } from '../../data/elementsData';
import './Wrapper.scss';
import colorContext from '../../contexts/element';
import Nav from '../../modules/Nav/Nav';

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
