import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dots } from 'react-activity';
import MetaTags from 'react-meta-tags';

import 'react-activity/dist/react-activity.css';
import './HomeEvaluationPage.css';

import EstimateHeading from '../../components/EstimateHeadingComponent/EstimateHeadingComponent';
import ProfileTestimonialsComponent from '../../components/ProfileTestimonialsComponent/ProfileTestimonialsComponent';
import SellersAndBuyersComponent from '../../components/SellersAndBuyersComponent/SellersAndBuyersComponent';
import MapBoxComponent from '../../components/MapBoxComponent/MapBoxComponent';
import GuideComponent from '../../components/GuideComponent/GuideComponent';
import LocationCopyComponent from '../../components/LocationCopyComponent/LocationCopyComponent';
import CtaComponent from '../../components/CtaComponent/CtaComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import ChatIcon from '../../components/ChatIconComponent/ChatIconComponent';

import { capitalizeFirstLetter } from '../../helpers/string';

import {
  initProfile
} from '../../reducers/ProfilePageReducer/actions';

class HomeEvaluationPage extends Component {
  state = {
    loading: true
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.user_path) {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    const { params } = this.props.match;

    const locationSlug = `${params.agent_type}/${params.state}/${params.city}/${params.area}`
    this.props.initProfile(locationSlug, params.agent_type);
  }

  render() {
    if (this.state.loading) {
      return <div className="loading-container">
        <Dots color="#fff" size={32} animating={true} />
      </div>;
    }

    const { profile, location, match, agentType } = this.props;
    const { params } = match;
    const locationSlug = `/${params.agent_type}/${params.state}/${params.city}/${params.area}`

    return (
      <div className="overflow-hidden absolute absolute-fill flex flex-column-md flex-column-sm">
        <MetaTags>
          <title>{capitalizeFirstLetter(agentType)} {location.area}</title>
          <meta name="description" content={`Are you looking for a ${agentType} in ${location.area}? I am a 5 star rated ${agentType} based in ${location.area}. I can help you buy or sell your home.`}/>
        </MetaTags>
        <div className="flex-column">
          <div className="d-flex flex-row-md flex-row-sm align-self-start w-100 header-wrapper">
            <span className="text d-none d-md-block">
              {`Want to chat with ${location.area} ${agentType} ${profile.first_name} ${profile.last_name}?`}
            </span>
            <a className="flex" href={`${'tel:' + profile.phone_number}`} rel="noopener noreferrer" target="_blank">{`${profile.phone_number}`}</a>
          </div>
        </div>
        <div className="flex-column">
          <EstimateHeading />
        </div>
        <div className="flex-column">
          <SellersAndBuyersComponent />
        </div>
        <ProfileTestimonialsComponent />
        <div className="flex-column">
          <MapBoxComponent />
        </div>
        <GuideComponent locationSlug={locationSlug} />
        <LocationCopyComponent />
        <CtaComponent />
        <FooterComponent />
        <div style={{ position: 'fixed', right: 0, bottom: 0, top: 0 }} >
          <ChatIcon user_path={this.props.profile.user_path}/>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.location.profile,
    location: state.location.location,
    agentType: state.location.agentType
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    initProfile
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(HomeEvaluationPage);
