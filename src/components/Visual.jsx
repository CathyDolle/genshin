import React from 'react';
import PropTypes from 'prop-types';
import FadeOutIn from '../utils/FadeOutIn';

const Visual = ({
  src, position,
}) => (
  <section className="visual">
    <FadeOutIn
      src={src}
      alt="visual"
      enterAnimationName={position === 'left' ? 'charAnimationLeft' : 'charAnimationRight'}
      enterAnimationDuration={500}
      leaveAnimationName="fadeCharAnimation"
      leaveAnimationDuration={1000}
    />
  </section>
);

Visual.propTypes = {
  src: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Visual;
