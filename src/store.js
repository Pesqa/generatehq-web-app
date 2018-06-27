import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

const preloadedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer, preloadedState);

// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify({ apiKey: {...store.getState().apiKey} }));
// });

export default store;
