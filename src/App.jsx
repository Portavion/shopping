import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}

export default App;
