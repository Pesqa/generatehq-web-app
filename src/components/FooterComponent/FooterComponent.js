import React, { Component } from 'react';
import { connect } from 'react-redux';
import generateLogo from './generate-logo.png';
import { toTitleCase } from '../../helpers/string';
import './index.css';

class FooterComponent extends Component {
  render() {
    const { profile, location, agentType } = this.props;
    return (
      <div className="footer-section">
        <div className="footer-text">{profile.footer_text}</div>
        <div className="footer-menu">
          <div className="footer-anchors">
            <div><a href="https://www.generatehq.com/" target="_blank" className="footer-anchor">2018 Generatehq</a></div>
            <div><a href="/privacy-policy" className="footer-anchor">Privacy policy</a></div>
            <div><a href={`/${profile.user_path}`} className="footer-anchor">{location.area} {toTitleCase(agentType)}</a></div>
          </div>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.location.profile,
    agentType: state.location.agentType,
    location: state.location.location,
  };
}

export default connect(stateToProps, null)(FooterComponent);
