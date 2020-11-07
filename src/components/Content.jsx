import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css';
import PropTypes from 'prop-types';
import React from 'react';
import './Content.scss';

const Content = ({ children }) => (
  <CustomScroll heightRelativeToParent="55%">
    <section className="content">
      {children}
    </section>
  </CustomScroll>
);

Content.defaultProps = {
  children: null,
};

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
