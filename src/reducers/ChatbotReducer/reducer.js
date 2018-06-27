import axios from 'axios';
import * as action_types from './constants';

const initialState = {
  chatMessageList: [],
  chatQuestions: [],
};

function chatbotReducer(state = initialState, action) {
  switch(action.type) {
    case action_types.GET_MESSAGE_START: {
      return Object.assign({...state}, {
        chatMessageList: [],
        chatQuestions: []
      });
    }
    case action_types.GET_QUESTION_SUCCESS: {
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
      axios.post('http://localhost:3000/api/v1/chat_messages/send_report', { messages: state.chatMessageList } )
      return Object.assign({...state});
    }
    default: {
      break;
    }
  }
  return state;
};


export default chatbotReducer;
