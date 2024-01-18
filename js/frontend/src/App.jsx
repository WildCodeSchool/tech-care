import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      {/* <div className="app">app</div> */}
      <Outlet />
    </div>
  );
}

export default App;
