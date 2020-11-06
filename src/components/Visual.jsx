import React from 'react';
import PropTypes from 'prop-types';
import FadeOutIn from '../utils/FadeOutIn';

const Visual = ({
  src, position, height,
}) => (
  <section className="visual">
    <FadeOutIn
      src={src}
      alt="visual"
      className={position}
      // TODO: Refactor this ternary condition. This should not exist.
      enterAnimationName={position === 'left' || position === 'xiao' ? 'charAnimationLeft' : 'charAnimationRight'}
      enterAnimationDuration={2000}
      leaveAnimationName="fadeCharAnimation"
      leaveAnimationDuration={500}
      height={height}
    />
  </section>
);

Visual.defaultProps = {
  height: null,
};

Visual.propTypes = {
  src: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default Visual;
