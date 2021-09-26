import React, { useState } from "react";
import "../App.css";
import { login } from "../utils";

export default function LoginPlain() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login({ username, password });
      setError("");
      setIsLoggedIn(true);
    } catch (error) {
      // do nothing for now
      setError("Incorrect Username Or Password");
    }
    setIsLoading(false);
  };
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <div>
            <h1>Hello {username}</h1>
            <button onClick={(e) => setIsLoggedIn(false)}>
                Logout
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="form">
            {error && <p className="error">{error}</p>}
            <p>Please Login !</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
