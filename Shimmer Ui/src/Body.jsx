import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);

  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setMemes(json.memes);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div className="meme-container">
      {!memes ? (
        <Shimmer />
      ) : (
        memes?.map((meme, index) => <MemeCard key={index} meme={meme} />)
      )}
    </div>
  );
};

export default Body;
