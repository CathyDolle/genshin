import React, { useContext } from 'react';
import Elements, { elements } from './Elements';
import './Wrapper.scss';
import Nav from './Nav';
import colorContext from '../contexts/element';

function Wrapper(props) {
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
      <div className="container">{props.children}</div>
      <Elements />
      <div className="shadow" />
      <footer>
        <p>copyright machin truc</p>
      </footer>
    </section>
  );
}

export default Wrapper;
