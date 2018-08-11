import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import ProfilePage from './pages/ProfilePage';
import ChatBotPage from './pages/ChatBotPage';
import BuyersGuidePage from './pages/BuyersGuidePage';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path={'/privacy-policy'}
              component={PrivacyPolicyPage}
            />
            <Route
              exact
              path={'/:user_path'}
              component={HomePage}
            />
            <Route
              exact
              path={'/:agent_type/:state/:city/:area'}
              component={ProfilePage}
            />
            <Route
              exact
              path={'/:agent_type/:state/:city/:area/buyers-guide'}
              component={BuyersGuidePage}
            />
            <Route
              exact
              path={'/:user_path/chat'}
              component={ChatBotPage}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppRouter;
