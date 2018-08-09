import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StepCarousel from '../StepCarouselComponent/StepCarouselComponent';
import Button from '../ButtonComponent/ButtonComponent';
import './index.css';

import {
  setProfileType
} from '../../reducers/ProfilePageReducer/actions';

const sellersStep = [{
  step: 'Step 1 - Design a Marketing Plan',
  description: 'Your home is unique. It demands its own marketing strategy. Based on your personal goals and the property you are selling, I will design a personalized marketing plan for your home.'
},{
  step: 'Step 2 - Prepare and List the Property',
  description: 'Selling your home for top dollar requires a lot more than great photos. I will create the highest quality marketing materials to make your home standout from the crowd.'
},{
  step: 'Step 3 - Open House Events and Showings',
  description: 'Open house events and showings tailored specifically to your location, home style and potential buyers demographics. Designed to generate buzz and fear of loss.'
},{
  step: 'Step 4 - Offers and Negotiation',
  description: "As an experienced realtor, I will negotiate on your behalf. I'm dedicated and committed to getting you the very best price."
}];

const buyersStep = [{
  step: 'Step 1 - Buyers consultation',
  description: "Let's meet for a no obligation consultation to discuss your goals for the purchase. I'll listen to your needs and preference and answer any of your questions."
},{
  step: 'Step 2 - Showings',
  description: "I will arrange and accompany you on viewings and open houses. I'll give you professional advice and support every step of the way."
},{
  step: 'Step 3 - Negotiation',
  description: 'As an experienced realtor, I will negotiate on your behalf. My commitment is to get you the home at the best price.'
},{
  step: 'Step 4 - After care',
  description: 'Once your offer has been accepted, I will support you through the purchase, I make it my business to always be there.'
}];

const sellersTitle = {
  title: 'There is a more being a top realtor than just putting up a sign',
  subTitle: "I'm here to help you design a comprehensive marketing plan to sell your home for the highest price possible",
}

const buyersTitle = {
  title: 'There is more to being a top realtor than just showing homes',
  subTitle: "I'm here to help you find your next home for the best price possible."
}

class SellersAndBuyers extends Component {
  static defaultProps = {
    profileType: 'seller',
  }

  onTabClick(index, type) {
    this.props.setProfileType(type)
  }

  render() {
    const { profile, profileType } = this.props;

    const steps = profileType === 'seller' ? sellersStep : buyersStep;
    const tabTitle = profileType === 'seller' ? sellersTitle : buyersTitle;

    const buttonTitle = profileType === 'seller' ? 'SELL MY HOME' : 'BUY A HOME';

    return(
      <div className="step-info">
        <div className="banner">
          <ol className="carousel-indicators text-center position-relative">
              <li
                onClick={() => this.onTabClick(0, 'seller')}
                className={ profileType === 'seller' ? 'active' : ''}
              >
                <span className="slide-link">Sellers</span>
              </li>
              <li
                onClick={() => this.onTabClick(1, 'buyer')}
                className={ profileType === 'buyer' ? 'active' : ''}
              >
                <span className="slide-link">Buyers</span>
              </li>
          </ol>
        </div>
        <div className="step-info-inner-desktop mt-5 flex-column align-items-center">
          <h2 className="text-center font-weight-bold">{tabTitle.title}</h2>
          <h5 className="subHeaderTitle text-center">{tabTitle.subTitle}</h5>
          <div className="d-flex w-100 flex-row justify-content-center mb-5">
            <img src={profile.background_image} className="profile-img" alt=""/>
            <div className="stepContent">
              {
                steps.map((step, i) => {
                  return(
                    <div key={i}>
                      <h5 className="font-weight-bold">{step.step}</h5>
                      <p>{step.description}</p>
                    </div>
                  );
                })
              }
              <a href={`/${profile.user_path}`}>Chat with {`${profile.first_name} ${profile.last_name}`}</a>
            </div>
          </div>
          <Button user_path={profile.user_path} title={buttonTitle}/>
        </div>
        <div className="step-info-inner-mobile mt-5 flex-column align-content-center">
          <h5 className="subHeaderTitle text-center">{tabTitle.subTitle}</h5>
          <div>
            <StepCarousel steps={steps} tabTitle={tabTitle}/>
          </div>
          <a href={`/${profile.user_path}`} className="align-self-center mt-1">Meet {`${profile.first_name} ${profile.last_name}`}</a>
        </div>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    profile: state.location.profile,
    profileType: state.location.profile_type
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    setProfileType
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(SellersAndBuyers);
