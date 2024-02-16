import { useState } from "react";

const UseStateHook = () => {
  const codeSnippet = `import {useState} from 'react'`;
  const [count, setCount] = useState(0);
  return (
    <div className="border border-gray-400 p-2 rounded-md">
      <p className="text-center text-gray-500">here is the useState hook</p>
      <div className="p-3 text-center space-y-5">
        <code
          className="w-1/2 mx-auto bg-slate-100 p-2 rounded-md text-center"
          dangerouslySetInnerHTML={{ __html: codeSnippet }}
        ></code>
        <p className="text-justify">
          The React useState hook is a state management function that allows
          functional components to manage and update state variables. It
          provides a simple way to incorporate stateful logic in React
          applications.
        </p>
        <p>count : {count}</p>
        <div className="flex justify-around items-center">
          <button
            className="p-2 text-white bg-green-500 rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="p-2 text-white bg-red-500 rounded-md"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseStateHook;
