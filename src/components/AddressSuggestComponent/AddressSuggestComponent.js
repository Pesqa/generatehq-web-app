import React from "react"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"

import './AddressSuggestComponent.css';


const MY_API_KEY = "AIzaSyAAAK9NIvrp0j0TUoc5vCsbRdmkG4Mqkqw"

export default class AddressSuggest extends React.Component {
    state = {
        search: "",
        value: "",
    }

    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        this.setState({search: "", value: geocodedPrediction.formatted_address})
    }

    keyPress = (e) => {
      if(e.keyCode === 13){
        this.props.addAnswer(this.props.question, e.target.value);
       }
    }

    render() {
        const {search, value} = this.state
        return (
            <GoogleMapLoader
                params={{
                    key: MY_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <GooglePlacesSuggest
                            googleMaps={googleMaps}
                            autocompletionRequest={{
                                input: search,
                                // Optional options
                                // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                            }}
                            // Optional props
                            onSelectSuggest={this.handleSelectSuggest}
                            textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                            customRender={prediction => (
                                <div className="address-suggestion">
                                    {prediction
                                        ? prediction.description
                                        : "My custom no results text"}
                                </div>
                            )}
                        >
                            <input
                                type="text"
                                value={value}
                                placeholder="Type and hit RETURN..."
                                onChange={this.handleInputChange}
                                onKeyDown={this.keyPress}
                                className="chatbot-input"
                            />
                        </GooglePlacesSuggest>
                    )
                }
            />
        )
    }
}