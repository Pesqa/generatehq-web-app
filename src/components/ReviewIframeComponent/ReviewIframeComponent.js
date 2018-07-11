import React from 'react';

// import './ReviewIframe.css';

class ReviewIframe extends React.Component {

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

      <iframe src={this.props.html_link} width={this.state.width} height={this.state.height} styles="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    )
  }
}

export default ReviewIframe;