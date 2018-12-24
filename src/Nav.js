import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import moment from "moment";

export class Nav extends Component {
  render() {
    const today = moment().format("YYYY-MM-DD");
    return (
      <div className="Nav">
        <h1>QUAKE FINDER</h1>
        {/* <h2>Find earthquakes around the world</h2> */}
        <p>
          Select a date and magnitude range, click search, and check the map!
        </p>
        <Form onSubmit={this.props.handleSubmit}>
          <FormGroup>
            <h3>Date Range</h3>
            <Label>From:</Label>
            <Input
              type="date"
              id="from-date"
              name="fromDate"
              min="1900-01-01"
              max={today}
              value={this.props.fromDate}
              onChange={this.props.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>To:</Label>
            <Input
              type="date"
              id="to-date"
              name="toDate"
              min="1900-01-01"
              max={today}
              value={this.props.toDate}
              onChange={this.props.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <h3>Magnitude Range</h3>
            <label>From:</label>
            <input
              type="number"
              id="min-mag"
              name="minMag"
              min="0"
              max="9"
              value={this.props.minMag}
              onChange={this.props.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <label>To:</label>
            <input
              type="number"
              id="to-mag"
              name="maxMag"
              min="1"
              max="10"
              value={this.props.maxMag}
              onChange={this.props.handleInputChange}
            />
          </FormGroup>
          {/* <input type="submit" value="submit" /> */}
          <Button outline>search</Button>{" "}
        </Form>
      </div>
    );
  }
}

export default Nav;
