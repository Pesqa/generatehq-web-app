import React from 'react';

import './InputField.css';

class InputField extends React.Component {

  constructor(props) {
      super(props);
      this.state = {value:''}

      this.handleChange = this.handleChange.bind(this);
      this.keyPress = this.keyPress.bind(this);
  }

  handleChange(e) {
      this.setState({ value: e.target.value });
  }

  keyPress(e){
    if(e.keyCode === 13){
      this.props.addAnswer(this.props.question, e.target.value);
     }
  }

  render(){
    return(
      <input type="text" className="chatbot-input" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} placeholder='Type and hit RETURN...' key={`chat_inputfield_${this.props.question}`}/>
    )
  }
}

export default InputField;