// import AnemoComponent from './Anemo'
import { Link } from "@reach/router"
import './Nav.scss'

// LOGO TYPES
import { Anemo } from 'genshin-icon'
import { Geo } from 'genshin-icon'
import { Electro } from 'genshin-icon'
import { Dendro } from 'genshin-icon'
import { Hydro } from 'genshin-icon'
import { Pyro } from 'genshin-icon'
import { Cryo } from 'genshin-icon'

function Nav() {
  return (
    <section className="nav">
        <Anemo className="logo" size="40" color="white"/>
        <Link className="active" to="/">Home</Link>
        <Link to="/">Guides</Link>
        <Link to="/">Dailies</Link>
        <Link to="/">Indispensables</Link>
        <Link to="/">News</Link>
        <p>LAST UPDATE <br/>03/11/2020</p>
    </section>
  )
}

export default Nav
