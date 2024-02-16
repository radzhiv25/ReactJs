// import { useState } from "react";
import UseEffectHook from "./components/UseEffectHook";
import UseStateHook from "./components/UseStateHook";

function App() {

  return (
    <div className="">
      <h1 className="text-center text-xl font-semibold my-10">
        Welcome to experience the React hooks
      </h1>
      <div className="mx-10 p-3 grid grid-cols-3 shadow-md">
        <UseStateHook />
        <UseEffectHook />
      </div>
    </div>
  );
}

export default App;
