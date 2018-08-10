import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { Dots } from 'react-activity';
import Chatbot from '../../components/ChatbotComponent/ChatbotComponent';

import {
  initProfile
} from '../../reducers/HomepageReducer/actions';

import 'react-activity/dist/react-activity.css';
import './ChatBot.css';

class HomePage extends Component {
  state = {
    loading: true
  };

  componentDidUpdate() {
  }

  componentDidMount() {
    this.props.initProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.user_path) {
      this.setState({ loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <div className="loading-container">
        <Dots color="#fff" size={32} animating={true} />
      </div>;
    }

    return (
      <div className="overflow-hidden absolute absolute--fill flex flex-column-md flex-column-sm">
        <div className="flex-column">
          <div className="d-flex flex-row-md flex-row-sm align-self-start w-100 header-wrapper"></div>
       </div>

       <div className="flex flex-auto flex-row-md flex-column-sm overflow-y-auto">

          <div className="agent-image chat-bot-header">
            <div className="d-block d-sm-none flex-column m-0">
                <div className="flex-row agent-name-text">{`${this.props.profile.first_name} ${this.props.profile.last_name}` }</div>
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
