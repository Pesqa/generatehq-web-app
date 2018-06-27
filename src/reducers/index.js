import { combineReducers } from 'redux'

import chatbotReducer from './ChatbotReducer/reducer';

export default combineReducers({
  questions: chatbotReducer
});
