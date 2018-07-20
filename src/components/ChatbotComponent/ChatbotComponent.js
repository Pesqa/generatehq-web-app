import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Link } from 'react-router-dom';
// import CSSTransitionGroup from 'react-transition-group';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './ChatbotComponent.css';
import InputField from '../InputField/InputField';
import ChatMessage from '../ChatMessageComponent/ChatMessageComponent'
import ChatAnswer from '../ChatAnswerComponent/ChatAnswerComponent'
import AddressSuggest from '../AddressSuggestComponent/AddressSuggestComponent';

import {
  initMessages,
  getMessage,
  selectAnswer
} from '../../reducers/ChatbotReducer/actions';

class Chatbot extends Component {

  constructor(props) {
    super(props);
    this.chatWrapper = React.createRef();
  }

  componentDidMount() {

    const headerHeight = document.getElementsByClassName('header-wrapper')[0].offsetHeight;
    const agentImgHeight = document.getElementsByClassName('agent-image')[0].offsetHeight;
    const agentHeaderHeight = document.getElementsByClassName('agent-header-wrapper')[0].offsetHeight;

    const agentSectionHeight = (window.innerWidth > 560) ? (headerHeight + agentHeaderHeight + 60) : (headerHeight + agentImgHeight + agentHeaderHeight + 30);
    const chatMinHeight = window.innerHeight - agentSectionHeight;

    this.setState({ chatMinHeight});

    this.props.initMessages();
  }

  selectAnswer = (answer, value, positionOffset) => {
    this.props.selectAnswer(answer, value, positionOffset);
  }

  addAnswer = (answer, value) => {
    this.props.selectAnswer(answer, value);
  }

  render() {
    const questionType = ((this.props.questions !== undefined) && (this.props.questions.length > 0)  ? this.props.questions[this.props.questions.length - 1].content_type : '');
    const messageCount = ((this.props.messages !== undefined) && (this.props.messages.length > 0 && this.props.messages.length <= 3)  ? 'small' : '');
    const minHeight = (this.state !== null && this.state.chatMinHeight !== null) ? (this.state.chatMinHeight + 'px') : 'auto';

    return (

      <div key='chat_bot' className="chatbot-overflow">
        <div key={`chat_bot`} className="chatbot-wrapper" ref={this.chatWrapper}>

          <ul className={`${ questionType } ${ messageCount }`} style={{ minHeight: `${minHeight}`}}>
            {this.props.messages.map(el => (
              <li className={el.message_type} key={el.id}>
                <ChatMessage type={el.message_type} parent={this.chatWrapper} id={el.id} content={el.content} el={el}  />
              </li>
            ))}
          </ul>
          <div className={`chatbot-questions ${'-' + ((this.props.questions !== undefined) && (this.props.questions.length > 0)  ? this.props.questions[0].content_type : 'none')}`} style={{ dispay: ((this.props.questions !== undefined) && (this.props.questions.length > 0)  ? 'block' : 'none')}}>
            {
              (this.props.questions !== undefined) && (this.props.questions.length > 0) ?
                this.props.questions.map(question => (
                  <ChatAnswer type={question.content_type} parent={this.chatWrapper} key={`chat_answer_${question.id}`} addAnswer={this.addAnswer} selectAnswer={this.selectAnswer} question={question}  />
                ))
                : ''
            }
          </div>


          <div className="d-flex flex-column chatbot-questions" style={{ dispay: ((this.props.questions !== undefined) && (this.props.questions.length > 0) && (this.props.messages.length < 3)  ? 'none' : 'block')}}>
            <div className="row ml-0 mr-0">
              <div className="col-sm-12 text-center">
                {
                  (this.props.questions !== undefined) && (this.props.questions.length > 0 || this.props.hideScrollMsg) ?
                    '' : "Scroll, if you don't feel like talking ⇣"
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    messages: state.questions.chatMessageList,
    questions: state.questions.chatQuestions,
    hideScrollMsg: state.questions.hideScrollMsg
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    initMessages,
    getMessage,
    selectAnswer
  }, dispatch);
}

const ChatbotComponent_Connected = connect(stateToProps, dispatchToProps)(Chatbot);

export default ChatbotComponent_Connected;
