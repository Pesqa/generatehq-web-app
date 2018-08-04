import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../ButtonComponent/ButtonComponent';

import './ImageHeadingComponent.css';

class ImageHeading extends Component {
  state = {
    slideIndex: 0,
  }

  render() {
    const { profile } = this.props;

    const content = {
      title: `${profile.first_name} ${profile.last_name}`,
      description: `Top ${profile.address} Realtor`,
      button: 'Get in touch',
      image: 'https://rets-heroku.s3.amazonaws.com/tricities/guides/header_images/000/000/001/original/shutterstock_794061112.jpg?1525190721',
    };

    return (
      <div className="ih-wrapper" style={{ background: `url('${content.image}')`, backgroundSize: 'cover'}}>
        <div className="caption-info">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 caption-info-outer">
                <div className="caption-info-inner text-center">
                  <h1 className="animated fadeInDown">
                    {content.title}
                  </h1>
                  <p className="animated fadeInUp">{content.description}</p>
                  <Button user_path={profile.user_path} title={content.button}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    profile: state.profile.profile,
  };
}

export default connect(stateToProps, null)(ImageHeading);
