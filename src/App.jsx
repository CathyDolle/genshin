import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Guides from './pages/Guides';
import Reactions from './pages/Indispensables/Reactions';
import GuideDebutant from './pages/Debutant';
import GuideAbyss from './pages/Abyss';
import { ElementProvider } from './contexts/element';

import './Responsive.scss';
import VisualAndPostsTemplate from './templates/VisualAndPosts';
import indispensable from './data/indispensables';
import paimon from './assets/images/char/paimon.png';
import xiao from './assets/images/char/xiao.png';
import dailies from './data/dailies';
import newsData from './data/news';

function App() {
  return (
    <ElementProvider>
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
            <VisualAndPostsTemplate visual={xiao} visualPosition="xiao" posts={newsData.posts} />
          </Route>
        </Switch>
      </Router>
    </ElementProvider>
  );
}

export default App;
