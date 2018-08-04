import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './slideAnimations.css';
import './index.css';
import './carouselStyle.css';

class CarouselComponent extends Component {
  state = {
    slideIndex: 0,
  }

  onTabClick(index) {
    if (this.state.slideIndex === index) {
      return;
    }

    let direction = 'next';
    if (index < this.state.slideIndex ) {
      direction = 'previous';
    }
    this.setState({ slideIndex: index })
    this.slider.goTo(index, direction);
  }

  slider: null;

  render() {
    const { profile } = this.props;

    const content = [
      {
        title: `${profile.first_name} ${profile.last_name}`,
        description: `Top ${profile.address} Realtor`,
        button: 'Get in touch',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        tabName: 'Sellers'
      },
      {
        title: `${profile.first_name} ${profile.last_name}`,
        description: `Top ${profile.address} Realtor`,
        button: 'Get in touch',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        tabName: 'Buyers'
      }
    ];

    return (
      <div>
        <Slider
          className="slider-wrapper"
          ref={e => (this.slider = e)}
          duration={500}
        >
    			{content.map((item, index) => (
    				<div
    					key={index}
    					className="slider-content"
    					style={{ background: `url('${item.image}') no-repeat center center` }}
    				>
    					<div className="inner">
    						<h2>{item.title}</h2>
    						<h1>{item.description}</h1>
    						<button className="slide-button">{item.button}</button>
    					</div>
    				</div>
    			))}
		    </Slider>
        <div className="banner">
          <ol className="carousel-indicators">
            {
              content.map((item, index) => (
                <li
                  key={index}
                  onClick={() => this.onTabClick(index)}
                  className={ this.state.slideIndex === index ? 'active' : ''}
                >
                  <span className="slide-link">{item.tabName}</span>
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    profile: state.profile.profile,
  };
}

export default connect(stateToProps, null)(CarouselComponent);
