import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

export default class StepCarousel extends Component {
  render() {
    const { steps } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <div className="step-carousel">
        <Slider {...settings}>
          {
            steps.map((step, i) => {
              return(
                <div className="slide-container" key={i}>
                  <h2 className="slide-title">STEP</h2>
                  <h2 className="slide-title">{i + 1}</h2>
                  <h5 className="stepTitle">{step.step.split('-')[1]}</h5>
                  <p>{step.description}</p>
                </div>
              );
            })
          }
        </Slider>
      </div>
    );
  }
}
