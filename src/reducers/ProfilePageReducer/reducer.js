import axios from 'axios';
import * as action_types from './constants';

const initialState = {
  profile: {
    first_name: '',
    last_name: ''
  },
};

function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case action_types.GET_ACCOUNT_INFO:
      {
        return Object.assign({ ...state }, {
          profile: action.data.profile,
        });

      }
    default:
      {
        break;
      }
  }
  return state;
};


export default homepageReducer;
