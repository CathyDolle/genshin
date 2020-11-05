import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Guides from "./pages/Guides"
import Dailies from "./pages/Dailies"
import Indispensables from "./pages/Indispensables"
import Reactions from "./pages/Indispensables/Reactions"
import News from "./pages/News"
import GuideDebutant from "./pages/Debutant"
import GuideAbyss from "./pages/Abyss"
import { ElementProvider } from "./contexts/element"

// responsive
import "./Responsive.scss"

function App() {
  return (
    <ElementProvider>
      <Router>
        <Switch>
          {/* home */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* guides */}
          <Route exact path="/guides">
            <Guides />
          </Route>
          <Route path="/guides/debutant">
            <GuideDebutant />
          </Route>
          <Route path="/guides/abyss">
            <GuideAbyss />
          </Route>
          {/* dailies */}
          <Route path="/dailies">
            <Dailies />
          </Route>
          {/* Indispensables */}
          <Route path="/indispensables">
            <Indispensables />
          </Route>
          <Route path="/reactions">
            <Reactions />
          </Route>
          {/* news */}
          <Route path="/news">
            <News />
          </Route>
          
        </Switch>
      </Router>
    </ElementProvider>
  )
}

export default App
