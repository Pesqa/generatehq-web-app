import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import { classnames } from '../../helpers/global';

import './LocationSearchInput.css';

export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  handleSelect = selected => {
    this.setState({address: selected });
    this.props.setAddress(selected);
  };

  handleCloseClick = () => {
    this.setState({address: '' });
    this.props.setAddress('');
  };

  setAddress = address => {
    this.setState({ address });
    this.props.setAddress(address);
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        setAddress={this.setAddress}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="Demo__search-bar-container">
                <div className="Demo__search-input-container">
                  <input
                    {...getInputProps({
                      placeholder: 'Enter Your Homes Address',
                      className: 'Demo__search-input',
                    })}
                  />
                  {this.state.address.length > 0 && (
                    <button
                      className="Demo__clear-button"
                      onClick={this.handleCloseClick}
                    >
                      x
                    </button>
                  )}
              </div>

            {suggestions.length > 0 && (
              <div className="Demo__autocomplete-container">
                {suggestions.map(suggestion => {
                  const className = classnames('Demo__suggestion-item', {
                    'Demo__suggestion-item--active': suggestion.active,
                  });

                  return (
                    /* eslint-disable react/jsx-key */
                    <div
                      {...getSuggestionItemProps(suggestion, { className })}
                    >
                      <strong>
                        {suggestion.formattedSuggestion.mainText}
                      </strong>{' '}
                      <small>
                        {suggestion.formattedSuggestion.secondaryText}
                      </small>
                    </div>
                  );
                  /* eslint-enable react/jsx-key */
                })}
                <div className="Demo__dropdown-footer">
                  <div>
                    <img
                      src={require('./images/powered_by_google_default.png')}
                      className="Demo__dropdown-footer-image"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}