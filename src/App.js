import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles/App.css';

import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="global-background">
        <HomePage />
      </Provider>

    );
  }
}

export default App;
