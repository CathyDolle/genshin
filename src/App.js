import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Guides from "./pages/Guides"
import Dailies from "./pages/Dailies"
import Indispensables from "./pages/Indispensables"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/guides">
          <Guides />
        </Route>
        <Route path="/dailies">
          <Dailies />
        </Route>
        <Route path="/indispensables">
          <Indispensables />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
