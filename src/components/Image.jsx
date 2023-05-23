import React, { Component } from "react";

class Image extends Component {
  render() {
    const { like, image, character, direction } = this.props;

    return (
      <img
        className={`${like ? "liked" : "notLiked"} ${direction==="Left" ? "faceLeft" :""}`}
        src={image}
        alt={character}
      />
    );
  }
}

export default Image;
