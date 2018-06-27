import React, { Component } from 'react';
import Chatbot from '../../components/ChatbotComponent/ChatbotComponent';

import './HomePage.css';

class HomePage extends Component {
  componentDidUpdate() {
  }

  render() {
    return (  
      <div className="overflow-hidden absolute absolute--fill flex flex-column-md flex-column-sm">
        <div className="flex-column">
          <div className="d-flex flex-row-md flex-row-sm align-self-start w-100 header-wrapper">
            <a className="flex" href="tel:+1-250-661-8915" rel="noopener noreferrer" target="_blank">+1 (250) 661-8915</a>
          </div>
       </div>

       <div className="flex flex-auto flex-row-md flex-column-sm overflow-y-auto">

          <div className="flex-md w-md-40 w-sm-100 d-flex align-items-end flex-row agent-image" style={ { backgroundImage: `url(${'http://localhost:3000/assets/images/' + 'bio-img.png'})`} }>
            <div className="d-block d-sm-none agent-name">
              <div className="">John Doe</div>
           </div>
          </div>
          
          <div className="d-flex flex-column  w-md-60 w-sm-100 overflow-y-auto-md _background-grey">
            <div className="">

              <div className="pt-3 pb-3">
                <div className="flex-row d-none d-md-block">
                  <div className="col-sm-12 text-center">
                    <img src="http://localhost:3000/assets/images/bio-img.png" height="52"/>
                  </div>
                </div>

                <div className="flex-row d-none d-md-block">
                  <div className="col-sm-12 text-center chatbot-title">
                    Agent name
                  </div>
                </div>

                <div className="flex-row">
                  <div className="col-sm-12 text-center chatbot-subtitle">
                    Your local real property expert
                  </div>
                </div>
              </div>

              <Chatbot />
            </div>

            <div className="main-container">
              <div className="flex-row">

                <div className="offset-md-1 col-md-7 mt-5">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <h1>About Me</h1>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      Hi! I’m Adrian Zumbrunnen. I’m a designer, writer, speaker and coffee enthusiast currently residing in beautiful Zurich, Switzerland. I help companies create memorable experiences through user centered design.

                      <hr/>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <h1>Get in touch</h1>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      Interested in working together, exchanging, or just talk about coffee? Great! Get in touch, I'm friendly.
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="usr" placeholder="Your Email"/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="usr" placeholder="Message"/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="form-group">
                        <button type="submit" className="btn btn-black">SUBMIT</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
