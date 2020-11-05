import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TextContent.scss';
import renderWithNextLine from '../utils/textRenderer';

const TextContent = ({
  title, src, text, to, toName, href, hrefName, banner,
}) => (
  <section className="text_container">
    <h1>{renderWithNextLine(title)}</h1>
    <div className="text_container_section">
      {src && <img src={src} alt="chibi" />}
      <p>
        {renderWithNextLine(text)}
        {to && <Link to={to}>{toName}</Link>}
        {href && (
          <a href={href} target="_blank" rel="noreferrer">
            {hrefName}
          </a>
        )}
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
  toName: '',
  text: '',
  href: '',
  hrefName: '',
  banner: '',
};

TextContent.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  to: PropTypes.string,
  toName: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  hrefName: PropTypes.string,
  banner: PropTypes.string,
};

export default TextContent;
