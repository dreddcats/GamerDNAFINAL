import React from "react";

const Recommendations = ({ recs }) => (
  <div className="recommendations">
    <h3>AI Picks For You</h3>
    <ul>
      {recs.map((game, i) => (
        <li key={i}>{game.name}</li>
      ))}
    </ul>
  </div>
);

export default Recommendations;
