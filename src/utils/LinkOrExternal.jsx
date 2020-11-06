import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const isInternal = (link) => (link.startsWith('/'));

const LinkOrExternal = ({ to, children }) => (!(isInternal(to))
  ? <a href={to} target="_blank" rel="noreferrer">{children}</a>
  : <Link to={to}>{children}</Link>);

LinkOrExternal.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkOrExternal;
