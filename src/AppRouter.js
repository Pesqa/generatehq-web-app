import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import ProfilePage from './pages/ProfilePage';
import HomeEvaluationPage from './pages/HomeEvaluationPage';
import ChatBotPage from './pages/ChatBotPage';
import BuyersGuidePage from './pages/BuyersGuidePage';
import SellersGuidePage from './pages/SellersGuidePage';

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
              path={'/:agent_type/:state/:city/:area/:page_type'}
              component={HomeEvaluationPage}
            />
            <Route
              exact
              path={'/:agent_type/:state/:city/:area/buyers-guide'}
              component={BuyersGuidePage}
            />
            <Route
              exact
              path={'/:agent_type/:state/:city/:area/sellers-guide'}
              component={SellersGuidePage}
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
