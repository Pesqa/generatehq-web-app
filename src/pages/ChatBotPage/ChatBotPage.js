import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import Chatbot from '../../components/ChatbotComponent/ChatbotComponent';

import './ChatBot.css';

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
          <div className="d-flex flex-row-md flex-row-sm align-self-start w-100 header-wrapper"></div>
       </div>

       <div className="flex flex-auto flex-row-md flex-column-sm overflow-y-auto">

          <div className="flex-md w-md-40 w-sm-100 d-flex align-items-end flex-row agent-image" style={ { background: `url(${this.props.profile.background_image}) no-repeat scroll top center`} }>
            <div className="d-block d-sm-none agent-name flex-column m-0">
                <div className="flex-row">{`${this.props.profile.first_name} ${this.props.profile.last_name}` }</div>
             </div>
             <br/>
          </div>

          <div id='agents-content' className="d-flex flex-column  w-md-60 w-sm-100 overflow-y-auto-md _background-grey">
            <div id='agents-chat-content' className="">
              <div className="agent-header-wrapper">
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
          </div>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.profile.profile,
    facebook_reviews: state.profile.facebook_reviews,
    testimonials: state.profile.testimonials
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    initProfile
  }, dispatch);
}

const HomePageComponent_Connected = connect(stateToProps, dispatchToProps)(HomePage);

export default HomePageComponent_Connected;
