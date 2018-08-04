import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';

import './Testinomial.css';

class TestinomialComponent extends Component {
  render() {
    return (
      <div className="testinomial-container">
        <div className="testinomial">
          <img src="https://greenmonkeymarketing.com/wp-content/uploads/2017/05/Screen-Shot-2017-05-09-at-5.20.54-PM-300x297.png" width="70" height="70" alt=""/>
          <h6 className="first-heading">Dan B</h6>
          <h6 className="grey-heading">Vancouver</h6>
          <StarRatingComponent
            name="rating"
            starCount={5}
            value={5}
          />
          <p className="testinomial-text">Awesome real estate team!! Professional honest and really fun to work with.</p>
        </div>
        <div className="testinomial-by">
          <h6 className="name">Dan B</h6>
          <p className="testinomial-location">{this.props.profile.address}</p>
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

export default connect(stateToProps, null)(TestinomialComponent);
