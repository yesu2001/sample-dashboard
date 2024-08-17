import { useEffect } from "react";
import "./App.css";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import data from "./data.json";

function App() {
  useEffect(() => {
    const dashData = localStorage.getItem("dashData");
    if (!dashData) {
      localStorage.setItem("dashData", JSON.stringify(data));
    }
  }, []);

  return (
    <div
      className="App"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
