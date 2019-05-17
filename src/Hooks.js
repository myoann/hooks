import { useState } from "react";

export const useCheckChange = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(isChecked ? false : true);
  };

  return {
    isChecked,
    handleCheck,
  }
}
