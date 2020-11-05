import './TextContent.scss';
import { Link } from 'react-router-dom';
import { renderWithNextLine } from '../utils/textRenderer';

function TextContent({
  title, src, text, to, toName, href, hrefName, banner,
}) {
  return (
    <section className="text_container">
      <h1>{renderWithNextLine(title)}</h1>
      <div className="text_container_section">
        {src && <img src={src} alt="chibi" />}
        <p>
          {renderWithNextLine(text)}
          {to && <Link to={to}>{toName}</Link>}
          {href && (
            <a href={href} target="_blank">
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
}

export default TextContent;
