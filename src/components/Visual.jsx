import React from 'react';
import PropTypes from 'prop-types';
import FadeOutIn from './FadeOutIn';

function Visual({
  srcRight, srcLeft, srcCustom, height,
}) {
  return (
    <section className="visual">
      {srcRight && (
        <FadeOutIn
          time={1}
          className="right"
          src={srcRight}
          alt="visual"
          height={height}
        />
      )}
      {srcLeft && (
        <FadeOutIn
          time={1}
          className="left"
          src={srcLeft}
          alt="visual"
          height={height}
        />
      )}
      {srcCustom && (
      <FadeOutIn
        time={1}
        className="xiao"
        src={srcCustom}
        alt="visual"
        height={height}
      />
      )}
    </section>
  );
}

// at least one src is required
Visual.defaultProps = {
  srcRight: '',
  srcLeft: '',
  srcCustom: '',
};

Visual.propTypes = {
  srcRight: PropTypes.string,
  srcLeft: PropTypes.string,
  srcCustom: PropTypes.string,
  height: PropTypes.string.isRequired,
};

export default Visual;
