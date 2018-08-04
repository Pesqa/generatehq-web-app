import * as action_types from './constants';

const initialState = {
  profile: { first_name: 'Agent'},
  facebook_reviews: [],
  testimonials: []
};

function homepageReducer(state = initialState, action) {
  switch(action.type) {
    case action_types.GET_ACCOUNT_INFO: {
      return Object.assign({...state}, {
        profile: action.data.profile,
        facebook_reviews: action.data.facebook_reviews,
        testimonials: action.data.testimonials
      });

    }
    default: {
      break;
    }
  }
  return state;
};


export default homepageReducer;
