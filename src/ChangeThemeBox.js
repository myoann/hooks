import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

import './ChangeThemeBox.css'
import { useCheckChange } from './Hooks';

const Card = ({ title, description, image }) => {
  const { isChecked, handleCheck } = useCheckChange();
  changeMode(isChecked);

  return (
    <div className="ThemeBox">
      Switch to {isChecked ? "Light" : "Dark"} Mode
      <div className="onoffswitch">
        <input
          type="checkbox"
          className="onoffswitch-checkbox"
          id="myonoffswitch"
          onClick={handleCheck}
          checked={isChecked}
        />
        <label className="onoffswitch-label" for="myonoffswitch"></label>
      </div>
    </div>
  )
}

const changeMode = isDarkMode => {
  document.querySelectorAll('body, .IconThumbsUp, .Card, .ThemeBox').forEach(e =>
    isDarkMode ? e.classList.add('dark') : e.classList.remove('dark')
  );
}

export default Card;
