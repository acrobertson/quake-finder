import React, { Component } from "react";
import { GoogleApiWrapper, Marker, InfoWindow, Map } from "google-maps-react";
import CurrentLocation from "./Map";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  handleMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 42.39,
          lng: -72.52
        }}
      >
        {this.props.quakes.map(quake => (
          <Marker
            key={quake.id}
            title={quake.properties.place}
            onClick={this.handleMarkerClick}
            position={{
              lat: quake.geometry.coordinates[0],
              lng: quake.geometry.coordinates[1]
            }}
            name={"current location"}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.title}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API
})(MapContainer);
