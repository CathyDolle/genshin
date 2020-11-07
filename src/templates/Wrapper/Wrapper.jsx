import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Elements from '../../components/Elements';
import { elements } from '../../data/elementsData';
import './Wrapper.scss';
import Nav from '../../modules/Nav/Nav';

const Wrapper = ({ children }) => {
  const element = useSelector((state) => state.app.element);
  const CurrentElement = elements.find(({ name }) => element === name);

  return (
    <section className="wrapper">
      {CurrentElement && (
      <CurrentElement.Component
        className="watermark"
        size="45%"
        color={CurrentElement.color}
      />
      )}
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
