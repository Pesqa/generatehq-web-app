import axios from 'axios';
import * as action_types from './constants';
import { getDomain } from '../../helpers/domain';

export const initProfile = (locationSlug, agentType) => {

  return (dispatch) => {
    return axios.post(
      process.env.REACT_APP_API_HOST + '/api/v1/locations/get_info',
      {
        domain: getDomain(),
        location_slug: locationSlug
      }
    )
      .then((response) => {
        if (response.status === 200) {
          if (response.data && response.data.status === 'failed') {
            throw new Error('Received status failed in response');
          }

          dispatch({
            type: action_types.GET_ACCOUNT_INFO,
            data: response.data,
            agentType: agentType
          });

          return response;
        }

        throw response;
      })
      .catch((error) => {
        console.log('error: ', error);
        dispatch({
          type: action_types.GET_ACCOUNT_ERROR,
          error: error
        });
      })
  }
}

export const setProfileType = (type) => {
  return (dispatch) => {
    dispatch({
      type: action_types.SET_PROFILE_TYPE,
      data: type
    });
  }
}

export const setChatBotVisibility = (isVisible) => {
  return (dispatch) => {
    dispatch({
      type: action_types.SET_CHATBOT_VISIBILITY,
      data: isVisible
    });
  }
}
