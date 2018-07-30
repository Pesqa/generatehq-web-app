import React from 'react';

import './TestimonialComponent.css';

class Testimonial extends React.Component {

  constructor(props) {
      super(props);
      var a = 1;

      if(window.innerWidth < 420){
        this.state = {width:'350', height: '532'}
      }else{
        this.state = {width:'500', height: '373'}
      }
  }

  render(){
    return(

      <div className='testimonial'>
        <div className="row">
          <div className="col-sm-6 text-left author">
            {this.props.author}
          </div>

          <div className="col-sm-6 text-right" >
          <img src={`/images/stars/${this.props.star_count}.png`} className="stars"/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-left info">
            {this.props.additional_info}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-left testimonial-content">
            {this.props.content}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 text-left date">
            {this.props.formated_date}
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonial;