import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../ButtonComponent/ButtonComponent';
import { toTitleCase } from '../../helpers/string';
import './EstimateHeadingComponent.css';

import LocationSearchInput from '../../components/LocationSearchInput/LocationSearchInput';
import EstimatePopup from '../../components/EstimatePopupComponent/EstimatePopupComponent';


class EstimateHeading extends Component {
  selectAnswer = (_this, answer) => () => {
    //this.el.parent.clientWidth - this.el.clientWidth
    // var positionOffset = { left: this.el.offsetLeft }
    var positionOffset = { left: this.ansRef.offsetLeft, top: this.ansRef.offsetParent.offsetParent.offsetTop, width: this.ansRef.offsetWidth }
    _this.props.selectAnswer(answer, undefined, positionOffset);

    // this.setState({style: { transform: 'translate3d(' + this.props.parent.current.firstChild.lastChild.offsetLeft + 'px, ' + this.props.parent.current.firstChild.lastChild.offsetTop + 'px, 0px)' } } );
  }

  addAnswer = (answer, value) => {
    this.props.selectAnswer(answer, value);
  }

  setAddress = address => {
    this.setState({ address });
  };


  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  state = {
    slideIndex: 0,
    address: '',
    showPopup: false
  }

  render() {
    const { profile, location, profileType, agentType } = this.props;
    const buttonTitle = profileType === 'seller' ? 'SELL MY HOME' : 'BUY A HOME';

    const content = {
      title: `${profile.first_name} ${profile.last_name}`,
      description: `Top ${location.area} ${toTitleCase(agentType)}`,
      image: location.header_image_url,
    };

    return (
      <div className="d-flex relative ih-wrapper flex-xl-column justify-content-center align-items-center" style={{ background: `url('${content.image}')`, backgroundSize: 'cover'}}>
        <div className="text-center heading-container">
          <p className="animated fadeInDown text-white header-estimation-text">
            Find Your Home's Worth
          </p>

          <p className="animated fadeInDown text-white subheader-estimation-text">
            Enter your home address to get a professional Home Evaluation.
            <br/>
            Our neighborhood experts are standing by to provide a thorough home address report
          </p>
          <div className="estimation-form">
            <div className="search-container">
              <LocationSearchInput setAddress={this.setAddress}/>
            </div>

            <input type="submit" onClick={this.togglePopup.bind(this)} className="btn btn-green btn-block" value="Get My Personalized Estimate" />
          </div>
        </div>



        {this.state.showPopup ?
          <EstimatePopup
            text='Close Me'
            address={this.state.address}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }

      </div>
    )
  }
}

function stateToProps(state) {
  return {
    profile: state.location.profile,
    location: state.location.location,
    profileType: state.location.profile_type,
    agentType: state.location.agentType
  };
}

export default connect(stateToProps, null)(EstimateHeading);
