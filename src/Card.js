import React from "react";
import ReactDOM from "react-dom";
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

import './Card.css'

class Card extends React.Component {
  state = {
    isLiked: null
  }

  onCardLiked = () => { this.setState({ isLiked: this.state.isLiked ? null : true }); }

  onCardDisliked = () => { this.setState({ isLiked: this.state.isLiked  === false ? null : false }); }

  render() {
    const { title, description, image } = this.props;
    const { isLiked } = this.state;

    return (
      <div className="Card">
        <div className="CardImage"><img src={image} /></div>
        <div className="CardTitle">{title}</div>
        <div className="CardDescription">{description}</div>

        <div className="CardBottom">
          <button className="CardButton">SHARE</button>

          <FaThumbsUp
            className="IconThumbsUp"
            size="1.5em"
            color={isLiked && "green"}
            onClick={() => this.onCardLiked()}
          />

          <FaThumbsDown
            className="IconThumbsDown"
            size="1.5em"
            color={isLiked === false && "red"}
            onClick={() => this.onCardDisliked()}
          />
        </div>
      </div>
    )
  }
}

export default Card;
