import "./App.scss"
import { Router } from "@reach/router"
import Home from "./pages/Home"
import Guides from "./pages/Guides"

function App() {
  return (
    <Router>
      <Home path="/" />
      <Guides path="/guides" />
    </Router>
  )
}

export default App
