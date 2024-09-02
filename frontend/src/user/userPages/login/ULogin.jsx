import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/cngenlogo.png";
import { Link } from "react-router-dom";
import { MdVisibilityOff, MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { login } from "../../userRedux/authSlice";
import './ULogin.scss';

const Login = () => {
  const [fields, setFields] = useState({
    username: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem('registeredUsername') || '';
    const savedPassword = localStorage.getItem('registeredPassword') || '';

    setFields({ username: savedUsername, password: savedPassword });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username: fields.username, password: fields.password }));

    if (fields.username === localStorage.getItem('registeredUsername') && fields.password === localStorage.getItem('registeredPassword')) {
      navigate('/user-home');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="logo" className="logo" />
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="form-title">Login</h2>
        <h3 className="form-subtitle">Please sign in to Continue</h3>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={fields.username}
          onChange={handleChange}
          className="login-input"
        />
        
        <div className="relative mb-6">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            value={fields.password}
            onChange={handleChange}
            className="login-input"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="password-toggle"
          >
            {passwordVisible ? <MdVisibilityOff /> : <MdOutlineRemoveRedEye />}
          </button>
        </div>

        <button
          type="submit"
          className="login-button"
        >
          Sign In
        </button>
        <div className="text-center">
          <p className="register-prompt">
            Don't have an account?{" "}
            <Link to="/user-register" className="register-link">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
