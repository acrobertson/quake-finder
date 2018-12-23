import React, { Component } from "react";
import MapContainer from "./MapContainer";
import Nav from "./Nav";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      resultCount: 0,
      quakes: []
    };
  }

  // fetch quake data w/ provided filters
  // TODO: add filtering
  handleSubmitClick = () => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-04-19&endtime=2018-04-20&eventtype=earthquake"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          quakes: result.features
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
    console.log("clicked");
  };

  render() {
    return (
      <div className="App">
        <Nav handleSubmitClick={this.handleSubmitClick} />
        <MapContainer quakes={this.state.quakes} />
      </div>
    );
  }
}

export default App;
