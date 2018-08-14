import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MapBoxComponent.css';

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  render() {
    const { profile, location } = this.props;
    const width = this.state.width > 560 ? '80vw' : '95vw';
    const height = this.state.width > 560 ? '80vh' : '30vh';

    return (
      <section className="d-flex flex-column justify-content-center align-items-center map-container">
        <h3 className="heading text-center">I have bought & sold {profile.homes_sold || 0} properties in {location.area} in the last 12 months</h3>
        <h6 className="light-text text-center mb-4">Contact me today and we will soon be adding your home to the map</h6>
        <body style={{marginBottom: 50, padding:0, overflow:'hidden', height: height, width: width}}>
            <iframe src={profile.map_code} frameborder="0" style={{overflow:'hidden', height:'100%', width: '100%'}} height="100%" width="100%"></iframe>
        </body>
      </section>
    );
  }
}

function stateToProps(state) {
  return {
    profile: state.profile.profile,
    location: state.location.location,
  };
}

export default connect(stateToProps)(MapBox);
