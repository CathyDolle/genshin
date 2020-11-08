import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TextContent.scss';
import RenderWithNextLine from '../../utils/TextRenderer';
import LinkOrExternal from '../../utils/LinkOrExternal';

const TextContent = ({
  title, src, text, to, linkText, banner,
}) => (
  <section className="text_container">
    <h1>{RenderWithNextLine(title)}</h1>
    <div className="text_container_section">
      {src && <img src={src} alt="chibi" />}
      <p>
        {RenderWithNextLine(text)}
        {to && <LinkOrExternal to={to}>{linkText}</LinkOrExternal>}
      </p>
    </div>
    {banner && (
      <Link to={to}><img className="banner" src={banner} alt="banner" /></Link>
    )}
  </section>
);

TextContent.defaultProps = {
  title: '',
  src: '',
  to: '',
  linkText: '',
  text: '',
  banner: '',
};

TextContent.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  to: PropTypes.string,
  linkText: PropTypes.string,
  text: PropTypes.string,
  banner: PropTypes.string,
};

export default TextContent;
