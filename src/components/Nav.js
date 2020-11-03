// import AnemoComponent from './Anemo'
import { NavLink } from "react-router-dom"
import "./Nav.scss"

// LOGO TYPES
import { Anemo } from "genshin-icon"
import { Geo } from "genshin-icon"
import { Electro } from "genshin-icon"
import { Dendro } from "genshin-icon"
import { Hydro } from "genshin-icon"
import { Pyro } from "genshin-icon"
import { Cryo } from "genshin-icon"

function Nav() {
  return (
    <nav>
      <Anemo className="logo" size="40" color="var(--anemo-color)" />
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/guides">Guides</NavLink>
      <NavLink to="/dailies">Dailies</NavLink>
      <NavLink to="/indispensables">Indispensables</NavLink>
      <NavLink to="/news">News</NavLink>
    </nav>
  )
}

export default Nav
