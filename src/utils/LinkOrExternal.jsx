import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkOrExternal = ({ to, children, external }) => (external
  ? <a href={to} target="_blank" rel="noreferrer">{children}</a>
  : <Link to={to}>{children}</Link>);

LinkOrExternal.defaultProps = {
  external: false,
};

LinkOrExternal.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

export default LinkOrExternal;
