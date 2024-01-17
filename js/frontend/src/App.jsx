import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  <>
    <Outlet />
    <Footer />;
  </>;
}

export default App;
