import React, { Component } from 'react';

import './ButtonComponent.css';

class ButtonComponent extends Component {
  render() {
    const { title, user_path } = this.props;

    const buttonTitle = title || 'Book a free valuation';

    return (
      <a className="btn btn-default generate-button" href={`/${user_path}`}>{buttonTitle}</a>
    );
  }
}

export default ButtonComponent;
