import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

import { useLikeChange } from './Hooks';

const Card = ({ title, description, image }) => {
  const { isLiked, handleLike, handleDislike } = useLikeChange();

  return (
    <div className="">
      <div className=""><input type="checkbox"</div>
    </div>
  )
}

export default Card;
