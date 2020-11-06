import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AnimatedImg = (props) => {
  const {
    animationName, style, animationDuration, alt, src, className, onAnimationEnd,
  } = props;

  useEffect(() => {
    const timeoutId = setTimeout(onAnimationEnd, props.animationDuration);
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
    />
  );
};

AnimatedImg.defaultProps = {
  className: '',
  style: {},
  onAnimationEnd: () => {},
};

AnimatedImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  animationName: PropTypes.string.isRequired,
  animationDuration: PropTypes.number.isRequired,
  onAnimationEnd: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

export default AnimatedImg;
