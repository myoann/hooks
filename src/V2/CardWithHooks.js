import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

import '../Card.css'
import { useLikeChange } from './Hooks';

const Card = ({ title, description, image }) => {
  const { isLiked, handleLike, handleDislike } = useLikeChange();

  return (
    <div className="Card">
      <div className="CardImage"><img src={image} /></div>
      <div className="CardTitle">{title}</div>
      <div className="CardDescription">{description}</div>

      <div className="CardBottom">
        
      </div>
    </div>
  )
}

export default Card;
