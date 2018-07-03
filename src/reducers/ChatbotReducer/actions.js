import axios from 'axios';
import parseDomain from "../../node_modules_src/parse-domain/lib/parseDomain";
import * as action_types from './constants';

export const selectAnswer = (chat_answer, value, positionOffset) => {
  return (dispatch) => {

    var response = chat_answer;

    if(positionOffset !== undefined){
      response = Object.assign({},chat_answer, {positionOffset: positionOffset});
    }


    if(response.content_type !== 'button' && value !== undefined){
      response = Object.assign({},chat_answer, {content: value});
    }


    dispatch({
      type: action_types.SELECT_ANSWER,
      data: { chat_message: response }
    });

    return getMessage(chat_answer);
  }
}

export const getMessage = (chat_message) => {
  return (dispatch) => {
    return axios.get(process.env.REACT_APP_API_HOST + '/api/v1/chat_messages/' + chat_message.id)
      .then((response) => {
        if (response.status === 200) {

          if(response.data.chat_message !== undefined && response.data.chat_message.last_message && response.data.chat_message.success_outcome){
            dispatch({
              type: action_types.CHAT_FINISHED
            });
          }

          dispatch({
            type: action_types.GET_MESSAGE_SUCCESS,
            data: response.data
          });
          return response;
        } else {
          throw response;
        }
      })
      .catch((error) => {
        dispatch({
          type: action_types.GET_MESSAGE_ERROR,
          error: error
        });
      })
  }
}

export const initMessages = () => {
  return (dispatch) => {
    return axios.get(process.env.REACT_APP_API_HOST + '/api/v1/chat_messages')
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_MESSAGE_START,
            data: response.data
          });
          return response;
        } else {
          throw response;
        }
      })
      .catch((error) => {
        dispatch({
          type: action_types.GET_MESSAGE_ERROR,
          error: error
        });
      })
  }
}
