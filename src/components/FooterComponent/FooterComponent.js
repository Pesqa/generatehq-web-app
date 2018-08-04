import React, { Component } from 'react';
import { connect } from 'react-redux';
import generateLogo from './generate-logo.png';
import './index.css';

class FooterComponent extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="footer-section">
        <div className="footer-text">{profile.footer_text}</div>
        <div className="footer-menu">
          <div className="footer-anchors">
            <div><a href="" className="footer-anchor">2018 Generatehq</a></div>
            <div><a href="" className="footer-anchor">Terms of use</a></div>
            <div><a href="/privacy-policy" className="footer-anchor">Privecy policy</a></div>
          </div>
          <img src={generateLogo} alt="" className="footer-logo"/>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.profile.profile,
  };
}

export default connect(stateToProps, null)(FooterComponent);
