import './TextContent.scss'
// import { Link } from "@reach/router"

function TextContent(props) {
    return (
      <section className="text_container">
         <h1>{props.title}</h1>
         <p>{props.text}</p>
         {/* <Link to={href}>{props.link}</Link> */}
      </section>
    )
  }
  
  export default TextContent
  