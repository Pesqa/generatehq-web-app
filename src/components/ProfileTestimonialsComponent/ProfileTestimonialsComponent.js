import React, { Component } from 'react';
import { connect } from 'react-redux';
import topAgent from './top-agent.png';

import Testinomial from '../ProfileTestimonialComponent/ProfileTestimonialComponent';
import Button from '../ButtonComponent/ButtonComponent';

import './ProfileTestimonials.css';

class ProfileTestimonialsComponent extends Component {
  render() {
    const { profile, testimonials } = this.props;

    return (
      <div className="testinomials-wrapper">
        <div className="top-agent">
          <img src={topAgent} className="top-agent-img" alt=""/>
        </div>
        <div className="container">
          <div className="row testinomials-row">
            <div className="testinomials-header">
              <h5 className="testinomials-sub-heading">I'm committed to making sure my client goals are achieved every time, whether it's a long term client or a referral from one of my happy customers.</h5>
              <h1 className="testinomials-heading">What my clients say about working with me.</h1>
            </div>
            <div className="testinomials">
              {
                testimonials.slice(1, 5).map((testimonial, i) => {
                  return <Testinomial testimonial={testimonial} key={i}/>
                })
              }
            </div>
            <div className="text-center w-100">
              <Button user_path={profile.user_path}/>
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
    testimonials: state.profile.testimonials,
  };
}

export default connect(stateToProps, null)(ProfileTestimonialsComponent);
