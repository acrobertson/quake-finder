import React, { Component } from "react";
import { GoogleApiWrapper, Marker, InfoWindow, Map } from "google-maps-react";
import ReactDOM from "react-dom";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.initialCenter;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );

      this.map = new maps.Map(node, mapConfig);
    }
  }

  recenterMap() {
    const map = this.map;
    const loc = this.props.initialCenter;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(loc.lat, loc.lng);
      map.panTo(center);
    }
  }

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
        initialCenter={{ lat: 38.2556925, lng: -85.7512828 }}
      >
        {this.props.quakes.map(quake => (
          <Marker
            key={quake.id}
            title={quake.properties.title}
            place={quake.properties.place}
            mag={quake.properties.mag}
            url={quake.properties.url}
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
          <div className="InfoWindow">
            <h1>{this.state.selectedPlace.place}</h1>
            <h2>{this.state.selectedPlace.mag} magnitude</h2>
            <a
              href={this.state.selectedPlace.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              More Info
            </a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API
})(MapContainer);
