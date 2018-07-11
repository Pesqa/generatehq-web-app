import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import Chatbot from '../../components/ChatbotComponent/ChatbotComponent';
import EmailForm from '../../components/EmailForm/EmailForm';
import ReviewIframe from '../../components/ReviewIframeComponent/ReviewIframeComponent';

import './HomePage.css';

import {
  initProfile
} from '../../reducers/HomepageReducer/actions';


class HomePage extends Component {
  componentDidUpdate() {
  }

  componentDidMount() {
    this.props.initProfile();
  }

  render() {
    return (
      <div className="overflow-hidden absolute absolute--fill flex flex-column-md flex-column-sm">
        <div className="flex-column">
          <div className="d-flex flex-row-md flex-row-sm align-self-start w-100 header-wrapper">
            <span className="text d-none d-md-block">
              {`${this.props.profile.header_text}`}
            </span>
            <a className="flex" href={`${'tel:' + this.props.profile.phone_number}`} rel="noopener noreferrer" target="_blank">{`${this.props.profile.phone_number}`}</a>
          </div>
       </div>

       <div className="flex flex-auto flex-row-md flex-column-sm overflow-y-auto">

          <div className="flex-md w-md-40 w-sm-100 d-flex align-items-end flex-row agent-image" style={ { background: `url(${'images/agents/' + this.props.profile.user_path + '.jpg'}) no-repeat scroll top center`} }>
            <div className="d-block d-sm-none agent-name flex-column">

                <div className="flex-row">{`${this.props.profile.first_name} ${this.props.profile.last_name}` }</div>
                <div className="flex-row lh-16">
                  <div className={`agent-star-rating ${((this.props.profile.homes_sold !== undefined) && (this.props.profile.homes_sold.length > 0)  ? '' : '-hidden')} -small `}>
                    <img src="/images/five-stars.png" />
                    <div className="description">{`${this.props.profile.homes_sold}` }</div>
                  </div>
                </div>
             </div>

             <br/>

             <div className={`d-none d-md-block  agent-star-rating ${((this.props.profile.homes_sold !== undefined) && (this.props.profile.homes_sold.length > 0)  ? '' : '-hidden')}`}>
                <img src="/images/five-stars.png" />
                <div className="description">{`${this.props.profile.homes_sold}` }</div>
             </div>
          </div>

          <div className="d-flex flex-column  w-md-60 w-sm-100 overflow-y-auto-md _background-grey">
            <div className="">

              <div className="agent-header-wrapper">
                  <div className="flex-row">
                    <div className="col-sm-12 text-left subtitle">
                      {`${this.props.profile.headline}`}
                    </div>
                  </div>

                  <div className="flex-row d-none d-md-block">
                    <div className="col-sm-12 text-left name">
                      {`${this.props.profile.first_name} ${this.props.profile.last_name}` }
                    </div>
                  </div>

                  <div className="flex-row">
                    <div className="col-sm-12 text-left status">
                      Online now
                    </div>
                  </div>


              </div>

              <Chatbot />
            </div>

            <div className="main-container">
              <div className="flex-row">

                <div className="offset-md-2 col-md-7 mt-5">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <h1>About Me</h1>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12 agent-description">
                      <div dangerouslySetInnerHTML={{__html: `${this.props.profile.bio}`}} />

                      <hr/>
                    </div>

                  </div>
                  <div style={ { display: ((this.props.facebook_reviews !== undefined) && (this.props.facebook_reviews.length > 0) ? 'block' : 'none')} }>
                    <div className="row">
                      <div className="col-md-7 col-sm-12">
                        <h1>Testimonials</h1>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 col-sm-12 agent-description">

                          {
                            this.props.facebook_reviews.map(el => (
                              <div>
                                <ReviewIframe html_link={el.html_link} html_content={el.html_content} key={el.html_link} />
                              </div>
                            ))

                          }

                        <hr/>
                      </div>

                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <h1>Get in touch</h1>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div dangerouslySetInnerHTML={{__html: `${this.props.profile.get_in_touch_desc}`}} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <EmailForm />
                    </div>
                  </div>



                  <div className="row mt-3">
                    <div className="col-md-12 col-sm-12">
                      {`${this.props.profile.footer_text}`}
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12 col-sm-12">
                      <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
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

const HomePageComponent_Connected = connect(stateToProps, dispatchToProps)(HomePage);

export default HomePageComponent_Connected;