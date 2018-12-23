import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>click submit to load recent earthquakes</div>
        <button onClick={this.props.handleSubmitClick}>submit</button>
      </div>
    );
  }
}

export default Nav;
