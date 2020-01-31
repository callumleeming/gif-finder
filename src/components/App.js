import React from "react";
import "../css/App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div class="banner">
        <h1>🕵️‍♀️ Search for a GIF 🕵️‍♂️</h1>
        <Search />
      </div>
    </div>
  );
}

export default App;
