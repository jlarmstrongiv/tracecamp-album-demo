import React from "react";
import "./App.css";

// https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from "uuid";

import Albums from "../Albums/Albums";
import Album from "../Album/Album";
import AddAlbum from "../AddAlbum/AddAlbum";

export default class App extends React.Component {
  state = {
    albums: [
      {
        name: "The Aliens My Buick",
        artwork:
          "https://img.discogs.com/wjKia6pIK_Mh0UxYUbAlfes5TiU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-162363-1372895275-7803.jpeg.jpg",
        id: uuidv4(),
      },
      {
        name: "Once Upon A Time",
        artwork:
          "https://img.discogs.com/giz6Sr8hG5bWzLPFIOnLM5N0yxU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-181737-1173309386.jpeg.jpg",
        id: uuidv4(),
      },
    ],
  };

  addAlbum = ({ name, artwork }) => {
    this.setState({
      albums: [
        {
          name,
          artwork,
          id: uuidv4(),
        },
        ...this.state.albums,
      ],
    });
  };

  removeAlbum = (id) => {
    this.setState({
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      albums: this.state.albums.filter((album) => album.id !== id),
    });
  };

  render() {
    return (
      <div className="App">
        <span>App</span>
        <Albums>
          {this.state.albums.map((album) => (
            <Album
              key={album.id}
              id={album.id}
              name={album.name}
              artwork={album.artwork}
              removeAlbum={this.removeAlbum}
            />
          ))}
        </Albums>
        <AddAlbum addAlbum={this.addAlbum} />
      </div>
    );
  }
}
