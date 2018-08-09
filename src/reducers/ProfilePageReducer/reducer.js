import * as action_types from './constants';

const initialState = {
  profile: {
    first_name: '',
    last_name: '',
  },
  facebook_reviews: [],
  testimonials: [],
  profile_type: 'seller',
  chatBotVisible: false,
};

function profilepageReducer(state = initialState, action) {
  switch (action.type) {
    case action_types.GET_ACCOUNT_INFO:
      {
        return Object.assign({ ...state }, {
          profile: action.data.profile,
          facebook_reviews: action.data.facebook_reviews,
          testimonials: action.data.testimonials
        });

      }
    case action_types.SET_PROFILE_TYPE:
      {
        return Object.assign({ ...state }, {
          profile_type: action.data,
        });
      }
    case action_types.SET_CHATBOT_VISIBILITY:
      {
        return Object.assign({ ...state }, {
          chatBotVisible: action.data,
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
