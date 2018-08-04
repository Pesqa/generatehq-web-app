import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class GuideBox extends Component {
  render() {
    return (
      <div>
        <div className="box-desktop">
          <div className="guide-box">
            <div className="box-title">
              <span>REALTOR GUIDE</span>
            </div>
            <h5 className="box-header">My Sellers guide</h5>
            <div className="box-footer">7 minute read</div>
          </div>
        </div>
        <div className="box-mobile">
          <div className="guide-box">
            <div className="box-title">
              <span>REALTOR GUIDE</span>
            </div>
            <h5 className="box-header">My Sellers guide</h5>
            <div className="box-footer">7 minute read</div>
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

export default connect(stateToProps, null)(GuideBox);
