import * as action_types from './constants';

const initialState = {
  profile: {
    first_name: '',
    last_name: '',
  },
  profile_type: 'seller',
};

function profilepageReducer(state = initialState, action) {
  switch (action.type) {
    case action_types.GET_ACCOUNT_INFO:
      {
        return Object.assign({ ...state }, {
          profile: action.data.profile,
        });

      }
    case action_types.SET_PROFILE_TYPE:
      {
        return Object.assign({ ...state }, {
          profile_type: action.data,
        });
      }
    default:
      {
        break;
      }
  }
  return state;
};


export default profilepageReducer;
