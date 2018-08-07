import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class GuideBox extends Component {
  handleClick = () => {
    const { url } = this.props;
    Object.assign(document.createElement('a'), { target: '_blank', href: url}).click();
  }

  render() {
    const { title } = this.props;

    return (
      <div onClick={this.handleClick}>
        <div className="box-desktop">
          <div className="guide-box">
            <div className="box-title">
              <span>{title}</span>
            </div>
            <h5 className="box-header">{title}</h5>
            <div className="box-footer">7 minute read</div>
          </div>
        </div>
        <div className="box-mobile">
          <div className="guide-box">
            <div className="box-title">
              <span>{title}</span>
            </div>
            <h5 className="box-header">{title}</h5>
            <div className="box-footer">7 minute read</div>
          </div>
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

export default connect(stateToProps, null)(GuideBox);
