import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';

import './ProfileTestimonials.css';

class ProfileTestimonialComponent extends Component {
  render() {
    const { profile, testimonial } = this.props;

    return (
      <div className="testinomial-container">
        <div className="testinomial">
          <img src="https://greenmonkeymarketing.com/wp-content/uploads/2017/05/Screen-Shot-2017-05-09-at-5.20.54-PM-300x297.png" width="70" height="70" alt=""/>
          <h6 className="first-heading">{testimonial.author}</h6>
          <h6 className="grey-heading">{testimonial.additional_info}</h6>
          <StarRatingComponent
            name="rating"
            starCount={testimonial.star_count}
            value={testimonial.star_count}
          />
          <p className="testinomial-text">{testimonial.content}</p>
        </div>
        <div className="testinomial-by">
          <h6 className="name">{testimonial.author}</h6>
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
