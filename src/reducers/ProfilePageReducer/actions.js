import axios from 'axios';
import * as action_types from './constants';
import { getDomain } from '../../helpers/domain';

export const initProfile = (userPath) => {

  return (dispatch) => {
    return axios.post(
      process.env.REACT_APP_API_HOST + '/api/v1/profiles/get_info',
      {
        domain: getDomain(),
        user_path: userPath
      }
    )
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_ACCOUNT_INFO,
            data: response.data
          });
          return response;
        }

        throw response;
      })
      .catch((error) => {
        dispatch({
          type: action_types.GET_ACCOUNT_ERROR,
          error: error
        });
      })
  }
}
