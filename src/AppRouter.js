import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';

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
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppRouter;
