import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dots } from 'react-activity';

import 'react-activity/dist/react-activity.css';
import './ProfilePage.css';

import ImageHeading from '../../components/ImageHeadingComponent/ImageHeadingComponent';
import ProfileTestimonialsComponent from '../../components/ProfileTestimonialsComponent/ProfileTestimonialsComponent';
import SellersAndBuyersComponent from '../../components/SellersAndBuyersComponent/SellersAndBuyersComponent';
import MapBoxComponent from '../../components/MapBoxComponent/MapBoxComponent';
import GuideComponent from '../../components/GuideComponent/GuideComponent';
import LocationCopyComponent from '../../components/LocationCopyComponent/LocationCopyComponent';
import CtaComponent from '../../components/CtaComponent/CtaComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import ChatIcon from '../../components/ChatIconComponent/ChatIconComponent';
import {
  initProfile
} from '../../reducers/ProfilePageReducer/actions';

class ProfilePage extends Component {
  state = {
    loading: true
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.user_path) {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.props.initProfile(this.props.match.params.user_path);
  }

  render() {
    if (this.state.loading) {
      return <div className="loading-container">
        <Dots color="#fff" size={32} animating={true} />
      </div>;
    }

    const { profile } = this.props;

    return (
      <div className="overflow-hidden absolute absolute-fill flex flex-column-md flex-column-sm">
        <div className="flex-column">
          <div className="d-flex flex-row-md flex-row-sm align-self-start w-100 header-wrapper">
            <span className="text d-none d-md-block">
              {`Want to chat with ${profile.address} REALTOR® ${profile.first_name} ${profile.last_name}?`}
            </span>
            <a className="flex" href={`${'tel:' + profile.phone_number}`} rel="noopener noreferrer" target="_blank">{`${profile.phone_number}`}</a>
          </div>
        </div>
        <div className="flex-column">
          <ImageHeading />
        </div>
        <div className="flex-column">
          <SellersAndBuyersComponent />
        </div>
        <ProfileTestimonialsComponent />
        <div className="flex-column">
          <MapBoxComponent />
        </div>
        <GuideComponent />
        <LocationCopyComponent />
        <CtaComponent />
        <FooterComponent />
        <div style={{ position: 'fixed', right: 0, bottom: 0, top: 0 }} >
          <ChatIcon user_path={this.props.match.params.user_path}/>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.profile.profile,
    facebook_reviews: state.profile.facebook_reviews
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    initProfile
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(ProfilePage);
