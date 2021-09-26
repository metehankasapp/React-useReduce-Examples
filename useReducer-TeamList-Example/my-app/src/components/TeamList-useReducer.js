import React, { useReducer } from "react";

const people = [
  { name: "Jay", alive: true },
  { name: "Kailee", alive: true },
  { name: "John", alive: true },
  { name: "Mia", alive: true },
];

const reducer = (people, action) => {
  switch (action.type) {
    case "chomp":
      return people.map((person) => {
        if (person.name === action.payload) {
          person.alive = false;
        }
        return person
        
      });
    case "revive":
      return people.map((person) => {
        if (person.name === action.payload) {
          person.alive = true;
        }
        return person

      });
    default:
      return people;
  }
};

export default function TeamList() {
  const [state, dispatch] = useReducer(reducer, people);


  return (
    <div>
      <div>
        {state.map((person, idx) => (
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
                <button onClick={() =>dispatch({ type: "chomp", payload: person.name })}>
                  {" "}
                  🐊 DEVOUR 🐊{" "}
                </button>{" "}
              </div>
            ) : (
              <div>
                {" "}
                ☠ ☠ DEAD ☠ ☠{" "}
                <button onClick={() => dispatch({ type: "revive", payload: person.name })}>
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
