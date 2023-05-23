import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = { like: false };

  onLikeToggle = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const { character, quote, image, characterDirection } = this.props.item;
    const { like } = this.state;
    const {handleDelete} = this.props;
    return (
      <div className="characterContainer">
        <Name
          character={character}
          like={like}
          onLikeToggle={this.onLikeToggle}
        />
        <Quote quote={quote} />
        <Image image={image} like={like} direction={characterDirection} />
        <Delete id={quote} handleDelete = {handleDelete}/>
      </div>
    );
  }
}

export default Character;
