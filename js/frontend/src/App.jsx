import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [genre, setGenre] = useState("Neutre");
  const [prefs, setPrefs] = useState([]);

  return (
    <div>
      {/* <div className="app">app</div> */}
      <Outlet context={{ genre, setGenre, prefs, setPrefs }} />
    </div>
  );
}

export default App;
