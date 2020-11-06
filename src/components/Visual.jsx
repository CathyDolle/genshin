import React from 'react';
import PropTypes from 'prop-types';
import FadeOutIn from '../utils/FadeOutIn';

const Visual = ({
  src, position, height,
}) => (
  <section className="visual">
    <FadeOutIn
      time={1}
      className={position}
      src={src}
      alt="visual"
      height={height}
    />
  </section>
);

Visual.propTypes = {
  src: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Visual;
