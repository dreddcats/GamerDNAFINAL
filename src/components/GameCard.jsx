import React from "react";

const GameCard = ({ game, onLike, onDislike, onPlayed }) => (
  <div className="game-card">
    <img src={game.background_image} alt={game.name} className="game-image" />
    <h2>{game.name}</h2>
    <div className="buttons">
      <button onClick={() => onDislike(game)}>Dislike</button>
      <button onClick={() => onLike(game)}>Like</button>
      <button onClick={() => onPlayed(game)}>Played On</button>
    </div>
  </div>
);

export default GameCard;
