import React, { Component } from 'react';
import { connect } from 'react-redux';

import Testinomial from '../TestinomialComponent/TestinomialComponent';
import Button from '../ButtonComponent/ButtonComponent';

import './Testinomials.css';

class TestinomialsComponent extends Component {
  render() {
    return (
      <div className="testinomials-wrapper">
        <div className="container">
          <div className="row testinomials-row">
            <div className="testinomials-header">
              <h5 className="testinomials-sub-heading">I'm committed to making sure my client goals are achieved every time, whether it's a long term client or a referral from one of my happy customers.</h5>
              <h1 className="testinomials-heading">What my clients say about working with me.</h1>
            </div>
            <div className="testinomials">
              <Testinomial/>
              <Testinomial/>
              <Testinomial/>
              <Testinomial/>
            </div>
            <Button user_path={this.props.profile.user_path}/>
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

export default connect(stateToProps, null)(TestinomialsComponent);
