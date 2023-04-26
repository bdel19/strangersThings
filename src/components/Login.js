import React, { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { username, password };
    const results = await login(user);
    // const errorMessage = results.error.message;
    // {
    //   results.success
    //     ? // console.log("Success"),
    //       (setToken(results.data.token),
    //       window.localStorage.setItem("token", results.data.token),
    //       navigate("/home"))
    //     : console.log("Failure");
    // }

    if (results.success) {
      console.log("LOGIN RESULTS", results);
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
