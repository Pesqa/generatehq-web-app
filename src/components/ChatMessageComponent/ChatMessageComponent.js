import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ChatMessageComponent.css';

import {
  getMessage
} from '../../reducers/ChatbotReducer/actions';

class ChatMessage extends React.Component {

  componentDidMount() {
    this.scrollToBottom();
    this.props.getMessage(this.props);
  }

  scrollToBottom() {
    this.props.parent.current.scrollIntoView(false,{ behavior: 'auto', block: 'start', inline: "start" });
  }

  render(){
    return(
      <div className={`chatbot-buble chatbot-message ${'-' + this.props.type}`} key={this.props.id} ref={el => { this.el = el; }}>
        {this.props.content}
      </div>
    )
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getMessage
  }, dispatch);
}

const ChatMessageComponent_Connected = connect(null, dispatchToProps)(ChatMessage);

export default ChatMessageComponent_Connected;