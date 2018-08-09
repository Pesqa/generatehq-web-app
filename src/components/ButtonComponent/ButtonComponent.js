import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ButtonComponent.css';

import {
  setChatBotVisibility
} from '../../reducers/ProfilePageReducer/actions';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iframeWidth: window.innerWidth < 420 ? window.innerWidth : 420,
      iframeHeight: window.innerHeight,
    }
  }

  toggleChatBotIframe = () => {
    if (!this.props.chatBotVisible) {
      this.props.setChatBotVisibility(true);
    }
  }

  render() {
    const { title } = this.props;

    const buttonTitle = title || 'Book a free valuation';

    return (
      <button className="btn btn-default generate-button" onClick={this.toggleChatBotIframe}>{buttonTitle}</button>
    );
  }
}

function stateToProps(state) {
  return {
    chatBotVisible: state.location.chatBotVisible,
  };
}


function dispatchToProps(dispatch) {
  return bindActionCreators({
    setChatBotVisibility,
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(ButtonComponent);
