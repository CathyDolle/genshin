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

import './Responsive.scss';
import VisualAndPostsTemplate from './templates/VisualAndPosts';
import indispensable from './data/indispensables';
import paimon from './assets/images/char/paimon.png';
import dailies from './data/dailies';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/guides">
            <Guides />
          </Route>
          <Route path="/guides/debutant">
            <GuideDebutant />
          </Route>
          <Route path="/guides/abyss">
            <GuideAbyss />
          </Route>
          <Route path="/dailies">
            <VisualAndPostsTemplate visual={paimon} posts={dailies.posts} />
          </Route>
          <Route exact path="/indispensables">
            <VisualAndPostsTemplate posts={indispensable.posts} />
          </Route>
          <Route path="/indispensables/reactions">
            <Reactions />
          </Route>
          <Route path="/news">
            <News />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
