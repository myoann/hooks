import { useState } from "react";

export const useLikeChange = () => {
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
