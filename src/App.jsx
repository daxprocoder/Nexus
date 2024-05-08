import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {

    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <p>hello this is code editiors hiii hji
      </p>
    </>
  );
}

export default App;
