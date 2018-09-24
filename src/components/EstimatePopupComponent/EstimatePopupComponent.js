import React from 'react';
import axios from 'axios';
import TextInput from '../TextInput/TextInput';
import { getDomain, getRelativePath } from '../../helpers/domain';

import './EstimatePopupComponent.css';

export default class  EstimatePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      emailSent: false,
      emailSentClass: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.emailForm = React.createRef();
    this.emailEmail = React.createRef();
    this.emailMsg = React.createRef();
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var fullDomain = getDomain();
    var userPath = window.location.pathname.split( '/' )[1];

    axios.post(process.env.REACT_APP_API_HOST + '/api/v1/locations/require_estimate', { domain: getDomain(),
                                                                                        location_slug: getRelativePath(),
                                                                                        estimate: {
                                                                                          first_name: this.state.first_name,
                                                                                          last_name: this.state.last_name,
                                                                                          email: this.state.email,
                                                                                          phone: this.state.phone,
                                                                                          address: this.props.address }
                                                                                        })
    .then((response) => {
      if (response.status === 200) {
        // dispatch({
        //   type: action_types.GET_ACCOUNT_INFO,
        //   data: response.data
        // });

        return response;
      } else {
        throw response;
      }
    })

    this.emailForm.current.setAttribute('disabled', 'disabled');
    this.setState({emailSent: true, emailSentClass: '-disabled'});
  }

  render() {
    return (
      <div className="modal3 open">
        <div className="modal3__header pa-3 grey lighten-1">
          <div className="row">
            <div className="col-sm-1 offset-sm-11">
              <a onClick={this.props.closePopup}>Go Back</a>
            </div>
          </div>
        </div>
        <div className="modal3__content pa-3 grey lighten-4">

          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-5">

              {this.state.emailSent ?

                <div>
                  <div className="row header">
                    <div className="col-sm-12 col-md-12 text-center">
                      Thank You
                    </div>
                  </div>

                  <div className="row sub-header">
                    <div className="col-sm-12 col-md-12 text-center">
                      We'll get in touch soon
                    </div>
                  </div>
                </div>
                : <div>
                    <div className="row header">
                      <div className="col-sm-12 col-md-12 text-center">
                        How we may reach you?
                      </div>
                    </div>

                    <div className="row sub-header">
                      <div className="col-sm-12 col-md-12 text-center">
                        Last Step! By providing your contact info, we'll be able
                        <br/>
                        to personalize and email your custom Corcoran Home Evaulation
                      </div>
                    </div>
                  </div>
              }


              <form onSubmit={this.handleSubmit} className={`mt-4 mb-4 ${this.state.emailSentClass}`} ref={this.emailForm}>
                <fieldset className="" disabled={this.state.emailSent}>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">

                      <div class="form-group">
                        <TextInput label="" name="first_name" type="text" value={this.state.first_name} onChange={this.handleChange} placeholder="First Name" className="form-control"/>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div class="form-group">
                        <TextInput label="" name="last_name" type="text" value={this.state.last_name} onChange={this.handleChange} placeholder="Last Name" className="form-control"/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-md-6">

                      <div class="form-group">
                        <TextInput label="" name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" className="form-control"/>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div class="form-group">
                        <TextInput label="" name="phone" type="text" value={this.state.phone} onChange={this.handleChange} placeholder="Phone" className="form-control"/>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div class="form-group">
                        <input name="address" type="hidden" value={this.props.address} />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <input type="submit" className="btn btn-green btn-block" value='Get My Personalized Estimate' />
                  </div>

                  <div class="info btn-block">
                    Corcoran is a trusted brand. Your information is secure
                  </div>


                </fieldset>
              </form>

            </div>
          </div>

        </div>
      </div>
    );
  }
}