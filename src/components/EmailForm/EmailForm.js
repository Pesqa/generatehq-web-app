import React, { Component } from 'react';
import axios from 'axios';
import parseDomain from "parse-domain";
import TextInput from '../TextInput/TextInput';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleCheckboxChange = (event) => {
    this.setState({[event.target.name]: event.target.checked});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var domainHash = parseDomain(window.location.href);
    var fullDomain = domainHash.subdomain + '.' + domainHash.domain + '.' + domainHash.tld;

    axios.post('http://api.generatehq.com' + '/api/v1/profiles/send_email', { domain: fullDomain, email: { from: this.state.email, message: this.state.message }  })
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

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mt-2">
        <TextInput label="" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Your Email"/>
        <TextInput label="" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Message"/>
        <input type="submit" className="btn btn-black" value="Submit" />
      </form>
    );
  }
}

export default SignupForm;
