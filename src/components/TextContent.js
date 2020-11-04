import "./TextContent.scss"
import { Link } from "react-router-dom"

function TextContent({title, src, text, to, toName, href, hrefName, banner }) {
  return (
    <section className="text_container">
      <h1>{title.split('\n').map(entry => <>{entry}<br /></>)}</h1>
      <div className="text_container_section">
        {src && <img src={src} alt="chibi"/>}
          <p>{text.split('\n').map(entry => <>{entry}<br /></>)}</p>
          {text}
          {to && <Link to={to}>{toName}</Link>}
          {href && (
            <a href={href} target="_blank" >
              {hrefName}
            </a>
          )}
      </div>
      {banner && (
        <Link to={to}><img className="banner" src={banner} alt="banner"/></Link>
      )}
    </section>
  )
}

export default TextContent
