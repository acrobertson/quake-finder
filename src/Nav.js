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
