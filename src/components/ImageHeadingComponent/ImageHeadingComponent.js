import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../ButtonComponent/ButtonComponent';
import { toTitleCase } from '../../helpers/string';
import './ImageHeadingComponent.css';

class ImageHeading extends Component {
  state = {
    slideIndex: 0,
  }

  render() {
    const { profile, location, profileType, agentType } = this.props;
    const buttonTitle = profileType === 'seller' ? 'SELL MY HOME' : 'BUY A HOME';

    const content = {
      title: `${profile.first_name} ${profile.last_name}`,
      description: `Top ${location.area} ${toTitleCase(agentType)}`,
      image: location.header_image_url,
    };

    return (
      <div className="d-flex relative ih-wrapper flex-xl-column justify-content-center align-items-center" style={{ background: `url('${content.image}')`, backgroundSize: 'cover'}}>
        <div className="text-center heading-container">
          <p className="animated fadeInDown text-white agent-name">
            {content.title}
          </p>
          <h1 className="animated fadeInUp text-white agent-location">{content.description}</h1>
          <Button user_path={profile.user_path} title={buttonTitle}/>
        </div>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    profile: state.location.profile,
    location: state.location.location,
    profileType: state.location.profile_type,
    agentType: state.location.agentType
  };
}

export default connect(stateToProps, null)(ImageHeading);
