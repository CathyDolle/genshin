import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AnimatedImg from '../components/AnimatedImg';

const FadeOutIn = (props) => {
  const {
    src,
    alt,
    className,
    enterAnimationName,
    enterAnimationDuration,
    leaveAnimationName,
    leaveAnimationDuration,
    height,
  } = props;
  const [currentSrc, setCurrentSrc] = useState(src);
  const [previousSrc, setPreviousSrc] = useState(null);

  useEffect(() => {
    if (currentSrc !== src) {
      setPreviousSrc(currentSrc);
      setCurrentSrc(src);
    }
  }, [src]);

  return (
    <>
      {previousSrc && (
        <AnimatedImg
          className={className}
          style={{ opacity: 0 }}
          key={`leaving_${previousSrc}`}
          alt={alt}
          src={previousSrc}
          animationName={leaveAnimationName}
          animationDuration={leaveAnimationDuration}
          onAnimationEnd={() => setPreviousSrc(null)}
          height={height}
        />
      )}
      {!previousSrc && (
        <AnimatedImg
          key={`entering_${currentSrc}`}
          alt={alt}
          src={currentSrc}
          animationName={enterAnimationName}
          animationDuration={enterAnimationDuration}
          className={className}
        />
      )}
    </>
  );
};

FadeOutIn.defaultProps = {
  className: '',
  height: null,
};

FadeOutIn.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  enterAnimationName: PropTypes.string.isRequired,
  enterAnimationDuration: PropTypes.number.isRequired,
  leaveAnimationName: PropTypes.string.isRequired,
  leaveAnimationDuration: PropTypes.number.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
};

export default FadeOutIn;
