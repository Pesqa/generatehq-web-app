import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dots } from 'react-activity';
import ChatIcon from '../../components/ChatIconComponent/ChatIconComponent';

import 'react-activity/dist/react-activity.css';
import './SellersGuidePage.css';

import ImageHeading from '../../components/ImageHeadingComponent/ImageHeadingComponent';
import Button from '../../components/ButtonComponent/ButtonComponent';

import {
  initProfile
} from '../../reducers/ProfilePageReducer/actions';

class SellersGuidePage extends Component {
  state = {
    loading: true
  };

  prepareData = () => {
    const { profile, location } = this.props;

    return [{
      heading: 'A unique strategy for every home',
      paragraphs:[
        'Every home is unique. It deserves an individual marketing strategy. I’ll design and implement a home marketing plan which is tailored specifically to your personal goals, property type, local area and current market conditions.'
      ]
    }, {
      heading: 'I shoulder the burden',
      paragraphs: [
        'My job is to present your home so beautifully you question why you are selling. I want to make potential buyers fall in love with your home. From staging to listing photos to online marketing, by goal is make people’s jaws hit the floor.'
      ]
    }, {
      heading: 'A reputation for excellence',
      paragraphs: [
        'My goal is simple: to sell your house quickly, without hassle, and for the highest price we can. With expert local knowledge and decades of experience in residential sales, we’ll know exactly what your home is worth, and how to market it.',
        'To start, we develop a sales strategy that’s completely tailored to your property, and which generates maximum interest and competition from prospective buyers. Our expert negotiators are then perfectly placed to close the sale, and get you the best price possible.'
      ]
    }, {
      heading: 'Always available',
      paragraphs: [
        `There’s a reason our clients are always left smiling. Our team of real estate agents are not just experts at marketing properties: they’re experts at doing it right here in ${location.area}.From the first conversation to the final sale, we will be by your side providing personal customer support, and making sure you get the result you want.`
      ]
    }, {
      heading: 'Personal service from the start',
      paragraphs: [
        'I provide free home evaluations to anyone thinking about selling their property. Simply hit the "Sell My Home" on the website, enter your contact details and a listing specialist will contact you to arrange a convenient time to meet.',
        'Based on professional experience, local market trends, and recent sales activity, our agent will give you an honest and unbiased valuation. There’s absolutely no obligation attached to this service, so you know you can trust the result.',

      ]
    }, {
      heading: 'Unrivalled exposure to buyers',
      paragraphs: [
        'Creating widespread exposure is key to selling in homes. From professional photography, to cost-effective staging, yard signs, virtual tours, and a social media campaign tailored for your home, we put your property in the spotlight.',
        'We also ensure this exposure gets to the right buyers. Present on virtually every real estate search site available, and with a database of buyers and brokers at our fingertips, your property will enjoy a stream of valuable attention.'
      ]
    }, {
      heading: 'Continuous innovation',
      paragraphs: [
        'In order to offer all of our customers the full VIP treatment, we invest continually in emerging technologies, training, and developing tailored marketing strategies. From advertising campaigns to jaw-dropping property listings, our innovation means your home stands out from the crowd.',
        'Ready to learn more? Let’s grab a coffee and discuss your needs. In just 30 minutes, we will:',
        'Provide you with a complimentary evaluation for your property',
        'Summarize our unique sales and marketing strategy',
        'Leave you with references and testimonials that validate our track record'
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
    const sellersData = this.prepareData();
    return (
      <div className="overflow-hidden absolute absolute-fill flex flex-column-md flex-column-sm">
        <div className="container justify-content-center align-items-center text-center sellers-container">
          <h1 className="sellers-heading">The Seller Experience</h1>
          <p className="mb-5">Every home, client and location demands its own strategy to get the best price, in the quickest time. From an initial meet and greet to handing over the keys, I work closely with my clients to help them achieve their real estate goals.</p>
          {sellersData.map((point, index) => {
            return (
              <div className="flex flex-column text-center mt-4 mb-5">
                <span className="digit">{index + 1}</span>
                <h2 className="digit-heading mb-5">{point.heading && point.heading}</h2>
                {point.paragraphs.map((paragraph) => {
                  return <p>{paragraph}</p>
                })}
              </div>
            )
          })}
          <Button title='Sell My Home' user_path={profile.user_path}/>
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

export default connect(stateToProps, dispatchToProps)(SellersGuidePage);
