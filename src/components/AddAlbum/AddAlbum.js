import React from "react";

export default class AddAlbum extends React.Component {
  state = {
    artwork: "",
    name: "",
  };
  onArtworkChange = (event) => {
    this.setState({ artwork: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onAddAlbum = () => {
    this.props.addAlbum({
      name: this.state.name,
      artwork: this.state.artwork,
    });
    this.setState({ name: "", artwork: "" });
  };

  render() {
    return (
      <div className="AddAlbum">
        <div>Current Name: {this.state.name}</div>
        <div>Current Artwork: {this.state.artwork}</div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.onNameChange}
            id="name"
            name="name"
            type="text"
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="artwork">Artwork</label>
          <input
            onChange={this.onArtworkChange}
            id="artwork"
            name="artwork"
            type="text"
            value={this.state.artwork}
          />
        </div>
        <button onClick={this.onAddAlbum}>Add Album</button>
      </div>
    );
  }
}
