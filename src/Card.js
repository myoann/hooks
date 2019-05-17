import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

import './Card.css'
import { useCheckChange } from './Hooks';

const Card = ({ title, description, image }) => {
  const { isChecked, handleCheck } = useCheckChange();

  return (
    <div className="Card">
      <div className="CardImage"><img src={image} /></div>
      <div className="CardTitle">{title}</div>
      <div className="CardDescription">{description}</div>

      <div className="CardBottom">
        <FaThumbsUp
          className="IconThumbsUp"
          size="1.5em"
          color={isChecked && "lightgreen"}
          onClick={() => handleCheck()}
        />
      </div>
    </div>
  )
}

export default Card;
