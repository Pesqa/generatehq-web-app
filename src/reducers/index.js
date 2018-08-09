import { combineReducers } from 'redux'

import chatbotReducer from './ChatbotReducer/reducer';
import homepageReducer from './HomepageReducer/reducer';
import profilepageReducer from './ProfilePageReducer/reducer';

export default combineReducers({
  questions: chatbotReducer,
  profile: homepageReducer,
  location: profilepageReducer,
});
