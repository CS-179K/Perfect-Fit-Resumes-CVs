import React, { useState } from "react";

function Login({ onLogin }) 
{
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = async (event) =>
	{
		event.preventDefault();
		setError("");

		try
		{
			const response = await fetch("http://localhost:5000/login",
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
				onLogin();
			}
		}
		catch  (error)
		{
			 setError("Something went wrong. Please try again.");
		}
	};

	return 
	(
		<div className="container">
		<h1>Login</h1>
		<form onSubmit={handleLogin}>
		<input
			type="text"
			placeholder="Username"
			value={username}
			onChange={(e) => setUsername(e.target.value)}
			className="input-field"
		/>
		<input
			placeholder="Password"
			value={password}
			onChange={(e) => setPassword(e.target.value)}
			className="input-field"
		/>
		{error && <p style={{ color: "red" }}>{error}</p>}
		<button type="submit">Login</button>
	   </form>
	 </div>
	);
}



export default Login;		
