import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppRouter from './AppRouter';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="global-background">
        <AppRouter />
      </Provider>

    );
  }
}

export default App;
