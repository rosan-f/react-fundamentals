import { useState } from "react";

const Like = () => {

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prev => !prev)
  }

  return(
    <div>
      <h1> Like Toogle </h1>
      {
        liked ?
        <i className="fa-solid fa-heart" onClick={toggleLike}></i> :
        <i className="fa-regular fa-heart" onClick={toggleLike}></i>
      }
    </div>
  );
}

export default Like;
