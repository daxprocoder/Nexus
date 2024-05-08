import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Toolbar } from "./scripts/ToolsBar";
import { FileHandler } from "./scripts/FileHandler";

function App() {

  return (
    <>
      <div className="App">
       <Toolbar /> 
       <FileHandler/>
      </div>
    </>
  );
}

export default App;
