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
import AddressSuggest from '../AddressSuggestComponent/AddressSuggestComponent';

import {
  initMessages,
  getMessage,
  selectAnswer,
} from '../../reducers/ChatbotReducer/actions';

class Chatbot extends Component {

  constructor(props) {
    super(props);
    this.chatWrapper = React.createRef();
  }

  componentDidMount() {
    this.props.initMessages();
  }

  selectAnswer = (answer) => () => {
    this.props.selectAnswer(answer);
  }

  addAnswer = (answer, value) => {
    this.props.selectAnswer(answer, value);
  }

  render() {
    return (

      <div key={`chat_bot`} className="chatbot-wrapper" ref={this.chatWrapper}>

          <TransitionGroup component="ul">
            {this.props.messages.map(el => (
              <CSSTransition
                key={`chat_message_${el.id}`}
                timeout={9500}
                classNames={`${el.message_type}-component-fade`}
              >
                <li className={el.type} key={el.id}>
                  <ChatMessage type={el.message_type} parent={this.chatWrapper} id={el.id} content={el.content}  />
                </li>
              </CSSTransition>
            ))}

            <div className="d-flex flex-column chatbot-questions">
              <div className="row ml-0 mr-0">
                <div className="col-sm-12 text-center">
                  {
                    (this.props.questions !== undefined) && (this.props.questions.length > 0) ?
                      this.props.questions.map(question => (
                        <span key={`chat_button_${question.id}`}>


                          {(() => {
                              switch (question.content_type) {
                                  case 'button':
                                    return <a className="btn chatbot-button" onClick={this.selectAnswer(question)}>{ question.content } </a>;
                                  case 'address':
                                      return <AddressSuggest addAnswer={this.addAnswer} question={question}/>;
                                  default :
                                      return <InputField addAnswer={this.addAnswer} question={question} />;
                              }
                          })()}





                        </span>
                      ))
                      : ''
                  }
                </div>
              </div>
            </div>
          </TransitionGroup>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    messages: state.questions.chatMessageList,
    questions: state.questions.chatQuestions
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    initMessages,
    getMessage,
    selectAnswer,
  }, dispatch);
}

const ChatbotComponent_Connected = connect(stateToProps, dispatchToProps)(Chatbot);

export default ChatbotComponent_Connected;
