import { useState } from "react";
import { login, register } from "../../redux/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "./Register.scss"

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register({ username, password, email });
  };
  return (
    <div className="Login">
      <div className="wrapper">
        <h1 className="title">SIGN UP</h1>
        <form className="loginForm">
          <input className="loginInput"
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input className="loginInput"
            placeholder="password"
            type="passport"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="loginInput"
            placeholder="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginSubmitBtn" onClick={handleClick}>
            Sing Up
          </button>
          {error && <span className="error">Something went wrong...</span>}
          <Link className="loginLinks" to="/register">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link className="loginLinks" to="/register">CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
