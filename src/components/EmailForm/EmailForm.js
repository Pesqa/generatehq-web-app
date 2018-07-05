import React, { Component } from 'react';
import axios from 'axios';
import parseDomain from "../../node_modules_src/parse-domain/lib/parseDomain";
import TextInput from '../TextInput/TextInput';

import './EmailForm.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
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

  handleCheckboxChange = (event) => {
    this.setState({[event.target.name]: event.target.checked});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var domainHash = parseDomain(window.location.href);
    var fullDomain = domainHash.subdomain + '.' + domainHash.domain + '.' + domainHash.tld;

    axios.post(process.env.REACT_APP_API_HOST + '/api/v1/profiles/send_email', { domain: fullDomain, email: { from: this.state.email, message: this.state.message }  })
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
    this.setState({emailSent: true, emailSentClass: '-disabled', email: '', message: ''});

  }

  render() {
    const { email, messagem, emailSent, emailSentClass } = this.state;

    return (
      <span>
        <form onSubmit={this.handleSubmit} className={`email-form mt-2 ${this.state.emailSentClass}`} ref={this.emailForm}>
          <TextInput label="" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Your Email" disabled={emailSent}/>
          <TextInput label="" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Message" disabled={emailSent}/>
          <input type="submit" className="btn btn-black" value={`${this.state.emailSentClass ? 'Thank You' : 'Submit'}`} />
        </form>
      </span>

    );
  }
}

export default SignupForm;
