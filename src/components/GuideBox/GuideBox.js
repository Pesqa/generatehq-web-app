import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import './index.css';

class GuideBox extends Component {
  handleClick = () => {
    const { url } = this.props;
    console.log(url);
    this.props.history.push(url);
    // Object.assign(document.createElement('a'), { target: '_blank', href: url}).click();
  }

  render() {
    const { title, profile, background } = this.props;

    return (
      <div onClick={this.handleClick}>
        <div className="box-desktop">
          <div className="guide-box" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover'
          }}>
            <div className="box-title">
              <span>Realtors Guide</span>
            </div>
            <h5 className="box-header">{title}</h5>
            <div className="box-footer">{profile.address}</div>
          </div>
        </div>
        <div className="box-mobile">
          <div className="guide-box" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover'
          }}>
            <div className="box-title">
              <span>Realtors Guide</span>
            </div>
            <h5 className="box-header">{title}</h5>
            <div className="box-footer">{profile.address}</div>
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

export default connect(stateToProps, null)(withRouter(GuideBox));
