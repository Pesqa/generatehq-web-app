import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chatbot from '../../components/ChatbotComponent/ChatbotComponent';
 import EmailForm from '../../components/EmailForm/EmailForm';

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
            <a className="flex" href="#" rel="noopener noreferrer" target="_blank">{`${this.props.profile.phone_number}`}</a>
          </div>
       </div>

       <div className="flex flex-auto flex-row-md flex-column-sm overflow-y-auto">

          <div className="flex-md w-md-40 w-sm-100 d-flex align-items-end flex-row agent-image" style={ { background: `url(${process.env.REACT_APP_API_HOST + '/assets/images/' + 'bio-img.png'}) no-repeat scroll center center`} }>
            <div className="d-block d-sm-none agent-name">
              <div className="">{`${this.props.profile.first_name} ${this.props.profile.last_name}` }</div>
           </div>
          </div>

          <div className="d-flex flex-column  w-md-60 w-sm-100 overflow-y-auto-md _background-grey">
            <div className="">

              <div className="pt-3 pb-3">
                <div className="flex-row d-none d-md-block">
                  <div className="col-sm-12 text-center">
                    <img src={`${process.env.REACT_APP_API_HOST + '/assets/images/bio-img.png'}`} height="52"/>
                  </div>
                </div>

                <div className="flex-row d-none d-md-block">
                  <div className="col-sm-12 text-center chatbot-title">
                    {`${this.props.profile.first_name} ${this.props.profile.last_name}` }
                  </div>
                </div>

                <div className="flex-row">
                  <div className="col-sm-12 text-center chatbot-subtitle">
                    {`${this.props.profile.headline}`}
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
                    <div className="col-md-12 col-sm-12">
                      {`${this.props.profile.bio}`}

                      <hr/>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <h1>Get in touch</h1>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      Interested in working together, exchanging, or just talk about coffee? Great! Get in touch, I'm friendly.
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <EmailForm />
                    </div>
                  </div>



                  <div className="row mt-3">
                    <div className="col-md-12 col-sm-12">
                      {`${this.props.profile.first_name} ${this.props.profile.last_name}   ${this.props.profile.address}`}
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
    profile: state.profile.profile
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    initProfile
  }, dispatch);
}

const HomePageComponent_Connected = connect(stateToProps, dispatchToProps)(HomePage);

export default HomePageComponent_Connected;