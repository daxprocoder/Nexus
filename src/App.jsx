import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Toolbar } from "./scripts/ToolsBar";
import { NavBar } from "./scripts/NavBar";

function App() {

  return (
    <>
      <div className="App">
       <Toolbar /> 
      <NavBar />
      </div>
    </>
  );
}

export default App;
