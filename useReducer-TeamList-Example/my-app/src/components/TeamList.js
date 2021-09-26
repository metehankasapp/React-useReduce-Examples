import React, { useState } from "react";

const people = [
  { name: "Jay", alive: true },
  { name: "Kailee", alive: true },
  { name: "John", alive: true },
  { name: "Mia", alive: true },
];

export default function TeamList() {
  const [deadList, setDeadList] = useState(people);
  const [list, setNewList] = useState(deadList);
  const [bool,setBoolean] = useState(false);
  return (
    <div>
      <div>
        {list.map((person, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-around",
            }}
          >
            <div>{person.name}</div>
            {person.alive ? (
              <div>
                {" "}
                ✨✨ ALIVE! ✨✨{" "}
                <button
                  onClick={(e) => {
                      console.log(deadList)
                    setDeadList([...list, deadList[idx].alive=false]);
                  }}
                >
                  {" "}
                  🐊 DEVOUR 🐊{" "}
                </button>{" "}
              </div>
            ) : (
              <div>
                {" "}
                ☠ ☠ DEAD ☠ ☠{" "}
                <button
                  onClick={(e) => {
                    console.log(deadList)

                    setDeadList([...list, deadList[idx].alive=true]);

                  }}
                >
                  {" "}
                  🥵 SPIT OUT 🥵{" "}
                </button>{" "}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
