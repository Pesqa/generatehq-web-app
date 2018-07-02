import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ChatMessageComponent.css';

import {
  getMessage
} from '../../reducers/ChatbotReducer/actions';

class ChatMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '..',
      showMessage: false,
      style: { width: '0px'},
    };
  }


  componentDidMount() {
    this.setState({content: this.props.content});

    setTimeout(function() {
      console.log(this.el_hidden.offsetWidth);
      this.scrollToBottom();
       this.setState({style: { width: this.el_hidden.offsetWidth + 'px' }});

      setTimeout(function() {
        this.setState({showMessage: true});
      }.bind(this), 500);

      this.props.getMessage(this.props);

    }.bind(this), 500)

  }

  scrollToBottom() {
    this.props.parent.current.scrollIntoView(false,{ behavior: 'auto', block: 'start', inline: "start" });
  }

  render(){
    return(
      <div key={this.props.id}>
        <div className={`chatbot-buble chatbot-message ${'-' + this.props.type}`} ref={el => { this.el = el; }} style={this.state.style}>
          { this.state.showMessage ? this.state.content : '..'}

        </div>
        <div className={`chatbot-buble chatbot-message ${'-' + this.props.type}`} ref={el_hidden => { this.el_hidden = el_hidden; }} style={this.state.showMessage ? {display: 'none'} : {visibility: 'hidden'}}>
            {this.props.content}
        </div>
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