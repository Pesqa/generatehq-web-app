import * as action_types from './constants';

const agentTypeMap = {
  'realtor': 'realtor',
  'real-estate-agent': 'real estate agent',
  'estate-agent': 'estate agent'
};

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
          location: action.data.location,
          profile: action.data.profile,
          facebook_reviews: action.data.facebook_reviews,
          testimonials: action.data.testimonials,
          agentType: agentTypeMap[action.agentType]
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
