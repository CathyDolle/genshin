import React from "react"
import Elements from "./Elements"
import "./Wrapper.scss"
import Nav from "./Nav"
import { Anemo } from "genshin-icon"

function Wrapper(props) {
  return (
    <section className="wrapper">
      <Anemo className="watermark" size="35%" color="var(--anemo-color)"/>
      <Nav />
      <div className="container">
        {props.children}
      </div>
      <Elements/>
      <div className="shadow"></div>
      <footer>
          <p>copyright machin truc</p>
      </footer>
    </section>
  )
}

export default Wrapper
