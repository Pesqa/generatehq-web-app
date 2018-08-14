import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import './MapBoxComponent.css';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYmVja3kxMDAxIiwiYSI6ImNqa2FseTdmMjBtZGUza21pZjYwd2twZ3cifQ.FweduppuI7E0n8BF8Sn9QA",
  scrollZoom: false
});

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
        <div>
          <Map
            style="mapbox://styles/mapbox/light-v9"
            containerStyle={{
              width: width,
              height: height,
            }}>
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
              </Layer>
          </Map>
        </div>
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
