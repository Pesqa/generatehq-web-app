import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={'/:user_path/privacy-policy'}
            component={PrivacyPolicyPage}
          />
          <Route
            exact
            path={'/:user_path'}
            component={HomePage}
          />
        </div>
      </Router>
    )
  }
}

export default AppRouter;
