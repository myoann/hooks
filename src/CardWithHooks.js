import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IconContext } from 'react-icons';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

import './Card.css'

const isActive = false;

const Card = ({ title, description, image }) => {
  const { isLiked, handleLike, handleDislike } = useLikeChange();

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
          onClick={() => handleLike()}
        />

        <FaThumbsDown
          className="IconThumbsDown"
          size="1.5em"
          color={isLiked === false && "red"}
          onClick={() => handleDislike()}
        />
      </div>
    </div>
  )
}

const useLikeChange = () => {
  const [isLiked, setLiked] = useState(null);

  const handleLike = () => {
    setLiked(isLiked ? null : true);
  };

  const handleDislike = () => {
    setLiked(isLiked  === false ? null : false);
  }

  return {
    isLiked,
    handleLike,
    handleDislike
  }
}


export default Card;
