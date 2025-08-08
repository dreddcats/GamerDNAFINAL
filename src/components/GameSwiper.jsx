import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";

const GameSwiper = () => {
  const [games, setGames] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}`)
      .then(res => res.json())
      .then(data => setGames(data.results));
  }, []);

  const handleLike = (game) => {
    console.log("Liked:", game.name);
    setCurrent((prev) => prev + 1);
  };

  const handleDislike = (game) => {
    console.log("Disliked:", game.name);
    setCurrent((prev) => prev + 1);
  };

  const handlePlayed = (game) => {
    console.log("Played On:", game.name);
    setCurrent((prev) => prev + 1);
  };

  return (
    <div>
      {games.length > 0 && current < games.length ? (
        <GameCard
          game={games[current]}
          onLike={handleLike}
          onDislike={handleDislike}
          onPlayed={handlePlayed}
        />
      ) : (
        <p>Loading or No more games!</p>
      )}
    </div>
  );
};

export default GameSwiper;
