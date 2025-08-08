import React from "react";
import GameSwiper from "./components/GameSwiper";
import TopNav from "./components/TopNav";
import "./styles/main.css";

function App() {
  return (
    <div className="app-container">
      <TopNav />
      <GameSwiper />
    </div>
  );
}

export default App;
