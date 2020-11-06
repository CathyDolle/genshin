import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TextContent.scss';
import renderWithNextLine from '../../utils/textRenderer';
import LinkOrExternal from '../../utils/LinkOrExternal';

const TextContent = ({
  title, src, text, to, linkText, external, banner,
}) => (
  <section className="text_container">
    <h1>{renderWithNextLine(title)}</h1>
    <div className="text_container_section">
      {src && <img src={src} alt="chibi" />}
      <p>
        {renderWithNextLine(text)}
        {to && <LinkOrExternal to={to} external={external}>{linkText}</LinkOrExternal>}
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
  external: false,
  banner: '',
};

TextContent.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  to: PropTypes.string,
  linkText: PropTypes.string,
  text: PropTypes.string,
  external: PropTypes.bool,
  banner: PropTypes.string,
};

export default TextContent;
