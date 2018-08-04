import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../ButtonComponent/ButtonComponent';
import './index.css';

class CtaComponent extends Component {
  render() {
    const { profile, profileType } = this.props;
    const headerTitle = profileType === 'seller' ? 'selling' : 'buying';
    const buttonTitle = profileType === 'seller' ? 'SELL MY HOME' : 'BUY A HOME';

    return (
      <div className="cta-section">
        <h2 className="cta-header">{`Thinking about ${headerTitle}?`}</h2>
        <p className="cta-sub-header">Lets's chat</p>
        <Button user_path={profile.user_path} title={buttonTitle}/>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.profile.profile,
    profileType: state.profilePage.profile_type
  };
}

export default connect(stateToProps, null)(CtaComponent);
