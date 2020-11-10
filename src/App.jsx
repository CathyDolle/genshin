import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Guides from './pages/Guides';
import Reactions from './pages/Indispensables/Reactions';
import GuideDebutant from './pages/Debutant';
import GuideAbyss from './pages/Abyss';
import News from './pages/News';
import Indispensables from './pages/Indispensables';
import Dailies from './pages/dailies';

import './Responsive.scss';
import store from './redux/store';
import Articles from './pages/Articles';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/guides" component={Guides} />
          <Route path="/guides/debutant" component={GuideDebutant} />
          <Route path="/guides/abyss" component={GuideAbyss} />
          <Route path="/dailies" component={Dailies} />
          <Route exact path="/indispensables" component={Indispensables} />
          <Route path="/indispensables/reactions" component={Reactions} />
          <Route path="/news" component={News} />
          <Route path="/article/:slug" component={Articles} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
