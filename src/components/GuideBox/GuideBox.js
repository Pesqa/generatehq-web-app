import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import './index.css';

class GuideBox extends Component {
  handleClick = () => {
    const { url } = this.props;
    this.props.history.push(url);
  }

  render() {
    const { title, profile, background, location, agentType } = this.props;

    return (
      <div onClick={this.handleClick}>
        <div className="box-desktop">
          <div className="guide-box" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover'
          }}>
            <div className="box-title">
              <h5>{agentType}s Guide</h5>
            </div>
            <h5 className="box-header">{title}</h5>
            <h5 className="box-footer">{location.area}</h5>
          </div>
        </div>
        <div className="box-mobile">
          <div className="guide-box" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover'
          }}>
            <div className="box-title">
              <h5>{agentType}s Guide</h5>
            </div>
            <h5 className="box-header">{title}</h5>
            <div className="box-footer">{location.area}</div>
          </div>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.location.profile,
    location: state.location.location,
    agentType: state.location.agentType,
  };
}

export default connect(stateToProps, null)(withRouter(GuideBox));
