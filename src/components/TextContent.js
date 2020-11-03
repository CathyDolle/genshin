import "./TextContent.scss"
import { Link } from "react-router-dom"

function TextContent(props) {
  return (
    <section className="text_container">
      <h1>{props.title}</h1>
      <div className="text_container_section">
        {props.src && <img src={props.src} alt="chibi"/>}
        <p>
          {props.text}
          {props.to && <Link to={props.to}>{props.toName}</Link>}
          {props.href && (
            <a href={props.href} target="_blank" >
              {props.hrefName}
            </a>
          )}
        </p>
      </div>
      {props.banner && (
        <img className="banner" src={props.banner} alt="banner"/>
      )}
    </section>
  )
}

export default TextContent
