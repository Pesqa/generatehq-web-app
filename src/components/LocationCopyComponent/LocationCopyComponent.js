import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class LocationCopyComponent extends Component {
  render() {
    const { profile, location, agentType } = this.props;

    return (
      <div className="location-section">
        <div className="location-container">
          <div className="location-header">
            <h3 className="location-header-text">{`${profile.first_name} ${profile.last_name} is your top ${agentType} in ${location.area}`}</h3>
          </div>
          <div>
            <p>
              {location.content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.location.profile,
    location: state.location.location,
    agentType: state.location.agentType,
  };
}

export default connect(stateToProps, null)(LocationCopyComponent);
