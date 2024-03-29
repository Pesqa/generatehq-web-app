import axios from 'axios';
import parseDomain from "../../node_modules_src/parse-domain/lib/parseDomain";
import * as action_types from './constants';

const initialState = {
  chatMessageList: [],
  chatQuestions: [],
};

function chatbotReducer(state = initialState, action) {
  switch(action.type) {
    case action_types.GET_MESSAGE_START: {
      if(action.data.chat_message === undefined){
        return Object.assign({...state}, {
          chatQuestions: action.data.chat_questions
        });
      }else{
        return Object.assign({...state}, {
          chatMessageList: [...state.chatMessageList, action.data.chat_message],
          chatQuestions: action.data.chat_questions
        });
      }
    }
    case action_types.GET_MESSAGE_SUCCESS: {
      if(action.data.chat_message === undefined){
        return Object.assign({...state}, {
          chatQuestions: action.data.chat_questions
        });
      }else{
        return Object.assign({...state}, {
          chatMessageList: [...state.chatMessageList, action.data.chat_message],
          chatQuestions: action.data.chat_questions
        });
      }
    }
    case action_types.SELECT_ANSWER: {
      return Object.assign({...state}, {
        chatMessageList: [...state.chatMessageList, action.data.chat_message],
        chatQuestions: action.data.chat_questions
      });
    }
    case action_types.CHAT_FINISHED: {
      var domainHash = parseDomain(window.location.href);
      var fullDomain = domainHash.subdomain + '.' + domainHash.domain + '.' + domainHash.tld;
      var userPath = window.location.pathname.split( '/' )[1];

      axios.post(process.env.REACT_APP_API_HOST + '/api/v1/chat_messages/send_report', { domain: fullDomain, user_path: userPath, messages: state.chatMessageList } )
      return Object.assign({...state});
    }
    default: {
      break;
    }
  }
  return state;
};


export default chatbotReducer;
