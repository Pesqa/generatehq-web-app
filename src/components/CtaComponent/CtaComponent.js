import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../ButtonComponent/ButtonComponent';
import './index.css';

class CtaComponent extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="cta-section">
        <h2>Thinking about selling?</h2>
        <p>Lets's chat</p>
        <Button user_path={profile.user_path} />
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.profile.profile,
  };
}

export default connect(stateToProps, null)(CtaComponent);
