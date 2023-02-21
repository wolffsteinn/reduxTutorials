import React from "react";
import "./App.css";
import ColourChange from "./components/ColourChange";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <h1> Hello World</h1>
      <Login />
      <Profile />
      <ColourChange />
      <Logout />
    </div>
  );
}

export default App;
