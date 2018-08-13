import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dots } from 'react-activity';
import ChatIcon from '../../components/ChatIconComponent/ChatIconComponent';

import 'react-activity/dist/react-activity.css';
import './BuyersGuidePage.css';

import ImageHeading from '../../components/ImageHeadingComponent/ImageHeadingComponent';
import Button from '../../components/ButtonComponent/ButtonComponent';

import {
  initProfile
} from '../../reducers/ProfilePageReducer/actions';

class BuyersGuidePage extends Component {
  state = {
    loading: true
  };

  prepareData = () => {
    const { profile, location } = this.props;

    return [{
      heading: 'Local real estate expert',
      paragraphs:[
        'There’s a reason my clients are always left smiling. As a real estate agent I am not just a fully licensed sales expert, but also a market expert who can advise on cost-effective renovations or layout changes which will help you turn your purchase into greater profit.',
        'From the first property alert to the final close, I will be by your side providing personal investor support, and making sure you get the result you want.'
      ]
    }, {
      heading: 'I shoulder the burden',
      paragraphs: [
        `Purchasing a new property can be a messy, time-intensive process. With considerable experience in the ${location.area} housing market, I am perfectly placed to offer the advice, services, and vendors needed to make your purchase as smooth as possible.`,
        "I’ll help you analyze every aspect of your new property, from the pricing and location, to structural integrity, layout, future appreciation, and of course the resale value. I never leave a client in the lurch, and I am always willing to get my hands dirty."
      ]
    }, {
      heading: 'A reputation for excellence',
      paragraphs: [
        'I know that our brand is integral to success, and a core reason why clients come back when making future purchases. My foremost goal is to delight my buyers, and provide the best services in the industry.',
        "There are client testimonials all over my site, and I take pride in my ability to deliver on my promises. I didn’t gain our experience overnight, and all of the skills, insights, and experience I’ve gained across our careers is entirely at your disposal."
      ]
    }, {
      heading: 'Always available',
      paragraphs: [
        'If you purchase with me, I am dedicated to making myself available, outside the 9 to 5, to answer your questions. I’m always a call, text or email away. I understand how complex buying a home could be, that’s why I always have transparent, honest, fast communication with all of my clients.'
      ]
    }, {
      heading: 'Personal service from the start',
      paragraphs: [
        `There’s a horrible culture of cold calls and unsolicited emails within the real estate world - but that’s just not us. Working with me means you can expect relevant, transparent communication: always from one of our experts, and only when you need it.`,
        "There are client testimonials all over my site, and I take pride in my ability to deliver on my promises. I didn’t gain our experience overnight, and all of the skills, insights, and experience I’ve gained across our careers is entirely at your disposal.",
        "Our property alerts only chime for relevant, high-yield opportunities, and if you ever have a question, we’re only ever a call away.",
        "Ready to learn more? Let’s grab a coffee and discuss your needs. In just 30 minutes, we will:",
      ],
      li: [
        "Provide you with a complimentary buyers consultation",
        "Discuss your preferences and requirements",
        "Leave you with references and testimonials that validate our track record"
      ]
    }];
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.user_path) {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    const { params } = this.props.match;

    const locationSlug = `${params.agent_type}/${params.state}/${params.city}/${params.area}`
    this.props.initProfile(locationSlug);
  }

  render() {
    if (this.state.loading) {
      return <div className="loading-container">
        <Dots color="#fff" size={32} animating={true} />
      </div>;
    }

    const { profile, location } = this.props;
    const buyersData = this.prepareData();
    return (
      <div className="overflow-hidden absolute absolute-fill flex flex-column-md flex-column-sm">
        <div className="container justify-content-center align-items-center text-center buyers-container">
          <h1 className="buyers-heading">The Buying Experience</h1>
          <p className="mb-5">As a buyer in {location.area} you have an array of options when in comes to choosing a real estate agent to guide you through the buying process. So, why choose to work with me?</p>
          {buyersData.map((point, index) => {
            return (
              <div key={index} className="flex flex-column text-center mt-4 mb-5">
                <span className="digit">{index + 1}</span>
                <h2 className="digit-heading mb-5">{point.heading && point.heading}</h2>
                {point.paragraphs.map((paragraph, index) => {
                  return <p key={index}>{paragraph}</p>
                })}
                {point.li && <ul>{point.li.map((paragraph, index) => {
                  return <li key={index} class="text-left">{paragraph}</li>
                })}</ul>}
              </div>
            )
          })}
          <Button title='Buy a Home' user_path={profile.user_path}/>
        </div>
        <div style={{ position: 'fixed', right: 0, bottom: 0, top: 0 }} >
          <ChatIcon user_path={profile.user_path}/>
        </div>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    profile: state.location.profile,
    location: state.location.location
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    initProfile
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(BuyersGuidePage);
