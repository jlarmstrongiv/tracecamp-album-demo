import React from "react";

export default class Albums extends React.Component {
  render() {
    return (
      <div className="Albums">
        <span>Albums</span>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
