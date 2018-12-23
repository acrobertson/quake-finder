import React, { Component } from "react";
import MapContainer from "./MapContainer";
import Nav from "./Nav";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: "2018-04-20",
      toDate: "2018-04-20",
      error: null,
      isLoaded: false,
      resultCount: 0,
      quakes: []
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  // fetch quake data w/ provided filters
  // TODO: add filtering
  handleSubmit = event => {
    event.preventDefault();

    const url = new URL("https://earthquake.usgs.gov/fdsnws/event/1/query");
    const params = {
      format: "geojson",
      starttime: this.state.fromDate,
      endtime: this.state.toDate
    };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    console.log(url);

    fetch(url.href)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            quakes: result.features
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Nav
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
        <MapContainer quakes={this.state.quakes} />
      </div>
    );
  }
}

export default App;
