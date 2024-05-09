import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Toolbar } from "./scripts/ToolsBar";

function App() {

  return (
    <>
      <div className="App">
       <Toolbar /> 
      </div>
    </>
  );
}

export default App;
