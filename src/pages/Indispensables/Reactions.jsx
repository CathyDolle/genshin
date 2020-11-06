import React, { useMemo, useState } from 'react';
import './Reactions.scss';
import Reaction from '../../modules/Reaction/Reaction';
import { elements } from '../../data/elementsData';
import reactions from '../../data/reactionsData';
import Wrapper from '../../templates/Wrapper/Wrapper';

const Reactions = () => {
  const [currentFocusElement, setCurrentFocusElement] = useState([]);

  const availableReactions = useMemo(() => {
    const allElementsSelected = currentFocusElement.map((ele) => ele.name);

    return allElementsSelected.length > 0 ? reactions
      .filter((reaction) => allElementsSelected.every((ele) => reaction.types.includes(ele))) : [];
  }, [currentFocusElement]);

  const handleClick = (element) => {
    if (currentFocusElement.some((ele) => ele.name === element.name)) {
      setCurrentFocusElement([...currentFocusElement.filter((ele) => ele.name !== element.name)]);
    } else {
      setCurrentFocusElement([...currentFocusElement, element]);
    }
  };

  return (
    <Wrapper>
      <section className="reactions_container">
        <h1>Choose an element</h1>
        <div className="element_section">
          {elements.map((element) => (
            <element.Component
              key={element.name}
              className={`elements ${currentFocusElement.some((ele) => ele.name === element.name) ? '' : ' elements_inactive'}`}
              onClick={() => handleClick(element)}
              size="45"
              color={element.color}
            />
          ))}
        </div>
        <div className="reactions_section">
          {availableReactions && availableReactions.map((element) => (
            <Reaction
              key={element.name}
              name={element.name}
              description={element.description}
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Reactions;
