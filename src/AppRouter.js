import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

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
              path={'/landing/:user_path'}
              component={ProfilePage}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppRouter;
