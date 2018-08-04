import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';

import './ProfileTestimonial.css';

class ProfileTestimonialComponent extends Component {
  render() {
    const { profile, testimonial } = this.props;

    return (
      <div className="testinomial-container mr-3">
        <div className="testinomial position-relative d-flex flex-column align-items-center justify-content-center mb-4 bg-white border">
          <img src="https://greenmonkeymarketing.com/wp-content/uploads/2017/05/Screen-Shot-2017-05-09-at-5.20.54-PM-300x297.png" width="70" height="70" alt=""/>
          <h6 className="font-weight-bold mb-0">{testimonial.author}</h6>
          <h6 className="text-black-50 font-weight-bold mb-0">{testimonial.additional_info}</h6>
          <StarRatingComponent
            name="rating"
            starCount={testimonial.star_count}
            value={testimonial.star_count}
          />
        <p className="testinomial-text text-black-50 font-weight-bold text-center mb-0 py-0 px-3">{testimonial.content}</p>
        </div>
        <div className="text-center">
          <h6 className="font-weight-bold m-0">{testimonial.author}</h6>
          <p className="testinomial-location">{profile.address}</p>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.profile.profile,
  };
}

export default connect(stateToProps, null)(ProfileTestimonialComponent);
