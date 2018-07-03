import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ChatMessageComponent.css';

import {
  getMessage
} from '../../reducers/ChatbotReducer/actions';

class ChatMessage extends React.Component {

  constructor(props) {
    super(props);

    if(props.el.positionOffset !== undefined){
      var position = props.el.positionOffset.left;
    }

    this.state = {
      content: '..',
      showMessage: false,
      style: { width: '0px'},
      animationClass: ''
    };

    if(props.type === 'answer'){
      this.state = {
        content: '..',
        showMessage: false,
        animationClass: ''
      };
    }
  }


  componentDidMount() {
    if(this.props.type === 'message' || this.props.type === 'question'){
      this.setState({content: this.props.content});

      setTimeout(function() {
        console.log(this.el_hidden.offsetWidth);
        this.scrollToBottom();
        this.setState({style: { width: this.el_hidden.offsetWidth + 'px'}});

        setTimeout(function() {
          this.setState({animationClass: '-transition', showMessage: true});
        }.bind(this), 500);

        this.props.getMessage(this.props);

      }.bind(this), 1000)
    }else if(this.props.type === 'answer'){

      let styleSheet = document.styleSheets[0];

      let keyframes =
        `@keyframes fly {
            from {transform:translate3d(-${this.el.offsetParent.offsetWidth - this.props.el.positionOffset.width - this.props.el.positionOffset.left}px, ${this.props.el.positionOffset.top - 72}px, 0px)}
            to {transform: translate3d(0px, 0px, 0px);}
        }`;


      this.setState({content: this.props.content });
      this.setState({ showMessage: true});
      this.props.getMessage(this.props);

    }

  }

  scrollToBottom() {
    this.props.parent.current.scrollIntoView(false,{ behavior: 'auto', block: 'start', inline: "start" });
  }

  render(){
    return(
      <div key={this.props.id}>
        <div className={`chatbot-buble chatbot-message ${'-' + this.props.type} ${this.state.animationClass}`} ref={el => { this.el = el; }} style={this.state.style}>
          { this.state.showMessage ? this.state.content : '..'}

        </div>
        <div className={`chatbot-buble chatbot-message ${'-' + this.props.type} ${this.state.animationClass}`} ref={el_hidden => { this.el_hidden = el_hidden; }} style={this.state.showMessage ? {display: 'none'} : {visibility: 'hidden'}}>
            {this.props.content}
        </div>
      </div>
    )
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getMessage
  }, dispatch);
}

const ChatMessageComponent_Connected = connect(null, dispatchToProps)(ChatMessage);

export default ChatMessageComponent_Connected;