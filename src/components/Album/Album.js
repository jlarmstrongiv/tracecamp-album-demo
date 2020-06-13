import React from "react";

export default class Album extends React.Component {
  onRemoveAlbum = () => {
    this.props.removeAlbum(this.props.id);
  };

  render() {
    return (
      <div className="Album" onClick={this.onRemoveAlbum}>
        <img src={this.props.artwork} alt={this.props.name} />
        <span>{this.props.name}</span>
      </div>
    );
  }
}
