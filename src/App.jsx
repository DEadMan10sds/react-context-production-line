import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Root</Link>
        <br />
        <Link to="/home">Home</Link>
        <br />
        <Link to="/info">Info</Link>
      </nav>
      APP Component
      <Outlet />
    </>
  );
}

export default App;
