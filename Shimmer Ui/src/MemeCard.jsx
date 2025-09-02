import React from "react";

const MemeCard = ({meme}) => {
  const { url, title, author } = meme;
  return (
    <div className="meme-card">
      <img className="img" src={url} alt="" />
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
