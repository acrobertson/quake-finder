import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Alert } from "reactstrap";
import moment from "moment";

export class Nav extends Component {
  render() {
    const error = this.props.error;
    const today = moment().format("YYYY-MM-DD");
    return (
      <div className="Nav">
        <div className="header">
          <h1>QUAKE FINDER</h1>
        </div>
        <Form onSubmit={this.props.handleSubmit}>
          <p>
            Select a date and magnitude range, click search, and check the map!
          </p>
          <div className="filters">
            <div className="range date-range">
              <h3>Date Range</h3>
              <FormGroup>
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
            </div>

            <div className="range mag-range">
              <h3>Magnitude Range</h3>
              <div className="mag-inputs">
                <FormGroup>
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
              </div>
            </div>
          </div>
          <Button>search</Button>{" "}
          {error && (
            <Alert color="danger">
              Too many earthquakes! Try narrowing your search.
            </Alert>
          )}
        </Form>
      </div>
    );
  }
}

export default Nav;
