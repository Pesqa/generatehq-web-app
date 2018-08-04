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
            <a href="" className="footer-anchor">2018 Generatehq</a>
            <a href="" className="footer-anchor">Terms of use</a>
            <a href="" className="footer-anchor">Privecy policy</a>
          </div>
          <img src={generateLogo} alt=""/>
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
