import React, { Component } from "react";
import moment from "moment";

export class Nav extends Component {
  render() {
    const today = moment().format("YYYY-MM-DD");
    return (
      <div className="Nav">
        <div>click submit to load recent earthquakes</div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            from
            <input
              type="date"
              id="from-date"
              name="fromDate"
              min="1900-01-01"
              max={today}
              value={this.props.fromDate}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            to
            <input
              type="date"
              id="to-date"
              name="toDate"
              min="1900-01-01"
              max={today}
              value={this.props.toDate}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            minimum magnitude
            <input
              type="number"
              id="min-mag"
              name="minMag"
              min="0"
              max="9"
              value={this.props.minMag}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            to
            <input
              type="number"
              id="to-mag"
              name="maxMag"
              min="1"
              max="10"
              value={this.props.maxMag}
              onChange={this.props.handleInputChange}
            />
          </label>

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Nav;
