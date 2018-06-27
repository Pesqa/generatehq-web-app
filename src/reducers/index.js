import { combineReducers } from 'redux'

import chatbotReducer from './ChatbotReducer/reducer';
import homepageReducer from './HomepageReducer/reducer';

export default combineReducers({
  questions: chatbotReducer,
  profile: homepageReducer
});
