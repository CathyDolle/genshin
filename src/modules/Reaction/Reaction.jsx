import React from 'react';
import PropTypes from 'prop-types';
import './Reaction.scss';

const Reaction = ({ name, description }) => (
  <div className="reaction_container">
    <div className="border border_left" />
    <div className="reaction">
      <h2>{name}</h2>
    </div>
    <div className="border border_right" />
    <p>
      {description}
    </p>
  </div>
);

Reaction.defaultProps = {
  name: '',
  description: '',
};

Reaction.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Reaction;
