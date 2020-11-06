import React from 'react';
import PropTypes from 'prop-types';
import FadeOutIn from '../utils/FadeOutIn';
import './Visual.scss';

const Visual = ({
  src, position, height,
}) => (
  <section className="visual">
    <FadeOutIn
      src={src}
      alt="visual"
      className={position}
      enterAnimationName={position === 'left' ? 'charAnimationLeft' : 'charAnimationRight'}
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
