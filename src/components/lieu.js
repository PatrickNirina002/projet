import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Lieu extends Component {
  render() {
    return (
      <div className="zoom">
      <Map google={this.props.google} >
 
      <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

      <InfoWindow onClose={this.onInfoWindowClose}>
          
      </InfoWindow>
    </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBBPYh4NSRR4LXwt5R-WHBTa2N83WQZn2c ")
})(Lieu)