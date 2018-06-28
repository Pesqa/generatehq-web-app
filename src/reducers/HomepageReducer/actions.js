import axios from 'axios';
import parseDomain from "parse-domain";
import * as action_types from './constants';

export const initProfile = () => {
  var domainHash = parseDomain(window.location.href);
  var fullDomain = domainHash.subdomain + '.' + domainHash.domain + '.' + domainHash.tld;
  var userPath = window.location.pathname.split( '/' )[1];

  return (dispatch) => {
    return axios.post(process.env.REACT_APP_API_HOST + '/api/v1/profiles/get_info', { domain: fullDomain, user_path: userPath  })
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_ACCOUNT_INFO,
            data: response.data
          });
          return response;
        } else {
          throw response;
        }
      })
      .catch((error) => {
        dispatch({
          type: action_types.GET_ACCOUNT_ERROR,
          error: error
        });
      })
  }
}
