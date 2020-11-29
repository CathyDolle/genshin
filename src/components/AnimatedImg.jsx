import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AnimatedImg = ({
  animationName, style, animationDuration, alt, src, className, onAnimationEnd, height,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(onAnimationEnd, animationDuration);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <img
      alt={alt}
      src={src}
      className={className}
      style={{ ...style, animationName, animationDuration: `${animationDuration}ms` }}
      height={height}
    />
  );
};

AnimatedImg.defaultProps = {
  className: '',
  height: '',
  style: {},
  onAnimationEnd: () => {},
};

AnimatedImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  animationName: PropTypes.string.isRequired,
  animationDuration: PropTypes.number.isRequired,
  onAnimationEnd: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

export default AnimatedImg;
