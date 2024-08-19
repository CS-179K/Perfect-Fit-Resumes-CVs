import React, { useState } from "react";

function SignUp({ onSignUp }) 
{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{8,})\S*$/;

  const handleSignUp = async (event) =>
  {
    event.preventDefault();
    setError("");

    if (!strongPasswordRegex.test(password)) 
    {
      setError("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character, and contain no spaces.");
      return;
    }

    try 
    {
      const response = await fetch("http://localhost:5000/signup", 
      {
        method: "POST",
        headers: 
        {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) 
      {
        const data = await response.json();
        setError(data.error);
      } 
      else 
      {
        onSignUp();
      }
    } 
    catch (error) 
    {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
