import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputField from '../InputField/InputField';
import AddressSuggest from '../AddressSuggestComponent/AddressSuggestComponent';

import './ChatAnswerComponent.css';

import {
  getMessage
} from '../../reducers/ChatbotReducer/actions';

class ChatAnswer extends React.Component {

  constructor(props) {
    super(props);

    this.answerRef = React.createRef();

    this.addAnswer = this.addAnswer.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);

    this.state = {
      content: '..',
      showAnswers: false,
      style: {visibility: 'hidden'},
      animationClass: ''
    };

  }


  componentDidMount() {

    setTimeout(function() {

      this.setState({animationClass: 'transition', showAnswers: true, style: {visibility: 'visible'} });

      }.bind(this), 1000)
  }

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


  render(){
    return(
        (() => {
            switch (this.props.type) {
                case 'button':
                  return <a className={`chatbot-buble -answer ${this.state.animationClass}`} onClick={this.selectAnswer(this, this.props.question)} style={this.state.style} ref={ansRef => { this.ansRef = ansRef; }}>{ this.props.question.content } </a>;
                case 'address':
                    return <AddressSuggest addAnswer={this.addAnswer} question={this.props.question} style={this.state.style} ref={ansRef => { this.ansRef = ansRef; }}/>;
                default :
                    return <InputField addAnswer={this.addAnswer} question={this.props.question} style={this.state.style} ref={ansRef => { this.ansRef = ansRef; }}/>;
            }
        })()

    )
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getMessage
  }, dispatch);
}

const ChatAnswerComponent_Connected = connect(null, dispatchToProps)(ChatAnswer);

export default ChatAnswerComponent_Connected;