import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { InputBoxes } from "./Components/InputBoxes";

function App() {
  const [val, setVal] = useState("");
  return (
    <>
      <InputBoxes length={5} onChange={(val) => setVal(val)} />
    </>
  );
}

export default App;
