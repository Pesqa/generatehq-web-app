import React from 'react';

import messagesPng from './messages.png';
import './ChatIconComponent.css';

class ChatBotComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      iframeWidth: window.innerWidth < 420 ? window.innerWidth : 420,
      iframeHeight: window.innerHeight,
      isIframeVisible: false
    }
  }

  toggleChatBotIframe = () => {
    this.setState({
      isIframeVisible: !this.state.isIframeVisible
    });
  }

  render() {
    const eIframe = (
      <div class="fadeInRight chatbot-container" width={this.state.iframeWidth} height={this.state.iframeHeight}>
        <div class="close-chat" onClick={this.toggleChatBotIframe}>x</div>
        <iframe title="chat" src={`/${this.props.user_path}/chat`} width={this.state.iframeWidth} height={this.state.iframeHeight} className="fadeInRight" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" > </iframe>
      </div>
    );

    if (this.state.isIframeVisible) {
      return eIframe;
    }

    return (
      <img src={messagesPng} className="chatbot-icon" onClick={this.toggleChatBotIframe} alt="chat"/>
    )
  }
}

export default ChatBotComponent;
