import React, { useState, useEffect } from "react";

export default function ShopList() {
  const [li, setLi] = useState("");
  const [list, updateList] = useState([]);

  function handleSubmit(e) {
    const obj = {
        value: li,
        key:Math.random()
    }
    e.preventDefault();
    updateList([...list, {obj}]);
    setLi("");
  }

  function addToList(e) {
    setLi(e.currentTarget.value);
  }

  function removeItem(e) {
    updateList(list.filter((item) => item !== e));
  }

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={addToList} value={li} />
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item.obj.value}</span>
            <button
              onClick={() => {
                removeItem(item);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
