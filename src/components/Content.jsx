import PropTypes from 'prop-types';
import React from 'react';
import './Content.scss';

const Content = ({ children }) => (
  <section className="content">
    {children}
  </section>
);

Content.defaultProps = {
  children: null,
};

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
