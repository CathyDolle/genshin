import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const isExternal = (link) => (/(http(s?)):\/\//i.test(link));

const LinkOrExternal = ({ to, children }) => (isExternal(to)
  ? <a href={to} target="_blank" rel="noreferrer">{children}</a>
  : <Link to={to}>{children}</Link>);

LinkOrExternal.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkOrExternal;
