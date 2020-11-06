import React, { useContext } from 'react';
import './Reactions.scss';
import colorContext from '../../contexts/element';
import ReactionSection from '../../modules/ReactionSection/ReactionSection';
import { elements } from '../../data/elementsData';
import Wrapper from '../../templates/Wrapper/Wrapper';

const Reactions = () => {
  const { current, setColor } = useContext(colorContext);

  return (
    <Wrapper>
      <section className="reactions_container">
        <h1>Choose an element</h1>
        <div className="element_section">
          {elements.map(({ Component, color, name }) => (
            <Component
              key={color}
              className={`elements ${current === name ? '' : ' elements_inactive'}`}
              onClick={() => setColor(name)}
              size="45"
              color={color}
            />
          ))}
        </div>
        <div className="reactions_section">
          <ReactionSection />
          <ReactionSection />
          <ReactionSection />
        </div>
      </section>
    </Wrapper>
  );
};

export default Reactions;
