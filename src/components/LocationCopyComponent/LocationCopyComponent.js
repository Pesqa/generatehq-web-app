import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class LocationCopyComponent extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="location-section">
        <div className="location-container">
          <div className="location-header">
            <h3 className="location-header-text">{`${profile.first_name} ${profile.last_name} is your top relator in ${profile.address}`}</h3>
          </div>
          <div>
            <p>
              {profile.bio}
            </p>
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

export default connect(stateToProps, null)(LocationCopyComponent);
