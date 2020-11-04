import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Guides from "./pages/Guides"
import Dailies from "./pages/Dailies"
import Indispensables from "./pages/Indispensables"
import News from "./pages/News"
import GuideDebutant from "./pages/Debutant"
import GuideAbyss from "./pages/Abyss"

// responsive
import "./Responsive.scss"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/guides">
          <Guides />
        </Route>
        <Route path="/dailies">
          <Dailies />
        </Route>
        <Route path="/indispensables">
          <Indispensables />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/guides/debutant">
          <GuideDebutant />
        </Route>
        <Route path="/guides/abyss">
          <GuideAbyss />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

