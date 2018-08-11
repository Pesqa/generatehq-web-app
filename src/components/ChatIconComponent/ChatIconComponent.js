import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import messagesPng from './messages.png';
import './ChatIconComponent.css';

import {
  setChatBotVisibility
} from '../../reducers/ProfilePageReducer/actions';

class ChatIconComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      iframeWidth: window.innerWidth < 420 ? window.innerWidth : 420,
      iframeHeight: window.innerHeight,
      showIframe: false,
    }
  }

  toggleChatBotIframe = () => {
    this.setState({
      iframeWidth: window.innerWidth < 420 ? window.innerWidth : 420,
      iframeHeight: window.innerHeight
    });

    this.props.setChatBotVisibility(!this.props.chatBotVisible);
  }

  render() {
    const user_path = this.props.profile.user_path;

    const eIframe = (
      <div className="fadeInRight chatbot-container" width={this.state.iframeWidth} height={this.state.iframeHeight}>
        <div className="close-chat" onClick={this.toggleChatBotIframe}>x</div>
        <iframe title="chat" src={`/${user_path}/chat`} width={this.state.iframeWidth} height={this.state.iframeHeight} className="fadeInRight" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" > </iframe>
      </div>
    );

    if (this.props.chatBotVisible) {
      return eIframe;
    }

    return (
      <img src={messagesPng} className="chatbot-icon" onClick={this.toggleChatBotIframe} alt="chat"/>
    )
  }
}

function stateToProps(state) {
  return {
    profile: state.location.profile,
    profileType: state.location.profile_type,
    chatBotVisible: state.location.chatBotVisible,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    setChatBotVisibility,
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(ChatIconComponent);
