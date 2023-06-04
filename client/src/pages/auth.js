import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";

export const Auth = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="auth">
      {showRegisterForm ? (
        <Register toggleRegisterForm={toggleRegisterForm} />
      ) : (
        <Login toggleRegisterForm={toggleRegisterForm} />
      )}
      <p>
        {showRegisterForm ? (
          <span>
            Already have an account?{" "}
            <button onClick={toggleRegisterForm}>Login here</button>
          </span>
        ) : (
          <span>
            Don't have an account?{" "}
            <button onClick={toggleRegisterForm}>Register here</button>
          </span>
        )}
      </p>
    </div>
  );
};

const Login = ({ toggleRegisterForm }) => {
  const [setCookies] = useCookies(["access_token"]);
  // rm cookies for now as it is unused.

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      if (result.data.token) {
        setCookies("access_token", result.data.token);
        console.log(" USER ID FRONT", result.data.userID);
        window.localStorage.setItem("userID", result.data.userID);
        navigate("/");
      } else {
        alert("Username or password is incorrect");
      }
    } catch (error) {
      console.error(error);
      alert("Username or password is incorrect");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <p>Enter your username and password below to login:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <button onClick={toggleRegisterForm}>Register here.</button>
      </p>
    </div>
  );
};

const Register = ({ toggleRegisterForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [_, setCookies] = useCookies(["access_token"]);
  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match, please try again.");
      return;
    }
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
      toggleRegisterForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <p>Create a new account by filling out the form below:</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Login here</Link>
    </div>
  );
};
