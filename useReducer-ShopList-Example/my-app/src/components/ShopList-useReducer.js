import React, { useReducer, useRef } from "react";

export default function ShopList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          },
        ];
      case "remove":
        return state.filter((item, index) => index !== action.index);

      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={dispatch({ type: "remove", index })}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
