import React from 'react';
import PropTypes from 'prop-types';
import './Reaction.scss';
import { elements } from '../../data/elementsData';

const Reaction = ({
  name,
  description,
  primaryComponent,
  types,
}) => {
  const otherElements = elements
    .filter((el) => el.name !== primaryComponent.name && types.includes(el.name));

  return (
    <div className="reaction_container">
      <div className="border border_left" />
      <primaryComponent.Component
        className="logo"
        size="40"
        color={primaryComponent.color}
      />
      <div className="reaction">
        <h2>{name}</h2>
      </div>
      <div className="border border_right" />
      <p>
        {description}
        {otherElements.map((el) => (
          <el.Component
            key={el.name}
            className="logo"
            size="40"
            color={el.color}
          />
        ))}
      </p>
    </div>
  );
};

Reaction.defaultProps = {
  name: '',
  description: '',
  types: [],
  primaryComponent: {},
};

Reaction.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  primaryComponent: PropTypes.object,
  types: PropTypes.arrayOf(PropTypes.string),
};

export default Reaction;
