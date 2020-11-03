// import AnemoComponent from './Anemo'
import { Link } from "@reach/router"
import { Anemo } from 'genshin-icon'
import './Nav.scss'

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
