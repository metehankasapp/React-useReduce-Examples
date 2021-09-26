import React, { useReducer } from "react";

export default function CounterReducer() {
  const [count, setCount] = useReducer((state, action) => {
    return state + action;
  },5); // third parameter is default value


  // count equal state,setcount is make action


  return (
    <div>
      <div className="Number">{count}</div>
      <button
        onClick={(e) => {
            setCount(5) // plus with 5 it is action
        }}
      >
        Add 5
      </button>
    </div>
  );
}
