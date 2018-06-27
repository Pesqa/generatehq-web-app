import React from 'react';

function TextInput(props) {
  return (
    <label style={{display: 'block'}}>
      { props.label }
        <div className="form-group">
      <input name={props.name} type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
      </div>
    </label>
  );
}

export default TextInput;
