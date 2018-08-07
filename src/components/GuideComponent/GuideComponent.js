import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuideBox from '../GuideBox/GuideBox';
import Button from '../ButtonComponent/ButtonComponent';

import './index.css';

class GuideComponent extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div style={{cursor: 'pointer'}}>
        <div className="guide-desktop">
          <div className="guide-section">
            <div className="guide-header-section">
              <h2 className="guide-header">Your real estate questions answered</h2>
            </div>
            <div className="guide-box-section">
              <GuideBox title="Buyers Guide" url="https://www.generatehq.com/buyers-guide/"/>
              <GuideBox title="Sellers Guide" url="https://www.generatehq.com/sellers-guide/"/>
            </div>
            <Button user_path={profile.user_path} />
          </div>
        </div>
        <div className="guide-mobile">
          <div className="guide-section">
            <div className="guide-header-section">
              <h2 className="guide-header">Your questions answered</h2>
            </div>
            <div className="guide-box-section">
              <GuideBox />
              <GuideBox />
            </div>
            <div className="talk-view">
              <h6>Thinking about selling?</h6>
              <h6>let's talk</h6>
            </div>
            <Button user_path={profile.user_path} />
          </div>
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

export default connect(stateToProps, null)(GuideComponent);
