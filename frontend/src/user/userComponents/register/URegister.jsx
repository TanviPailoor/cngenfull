import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/cngenlogo.png";
import { Link } from "react-router-dom";
import { MdVisibilityOff, MdOutlineRemoveRedEye } from "react-icons/md";
import './URegister.scss';

const Register = () => {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    phone: "",
    vehicleNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    vehicleNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const validateFields = () => {
    const usernameRegex = /^[A-Za-z]+$/;
    const vehicleNumberRegex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/; 
    const passwordErrors = {};

    if (!usernameRegex.test(fields.username)) {
      setErrors((prevErrors) => ({ ...prevErrors, username: "Username should contain only letters." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }

    if (!vehicleNumberRegex.test(fields.vehicleNumber)) {
      setErrors((prevErrors) => ({ ...prevErrors, vehicleNumber: "Vehicle number is invalid. Example: MH12AB1234." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, vehicleNumber: "" }));
    }

    if (fields.password !== fields.confirmPassword) {
      passwordErrors.confirmPassword = "Passwords do not match.";
    } else {
      passwordErrors.confirmPassword = "";
    }

    if (!fields.email.includes('@') || !fields.email.includes('.')) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is invalid." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (fields.password.length < 8 || !/[A-Z]/.test(fields.password) || !/[0-9]/.test(fields.password) || !/[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/.test(fields.password)) {
      passwordErrors.password = "Password must be 8 characters long, include at least one uppercase letter, one number, and one special character.";
    } else {
      passwordErrors.password = "";
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...passwordErrors }));
    return passwordErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).some(key => validationErrors[key])) {
      return;
    }

    localStorage.setItem('registeredUsername', fields.username);
    localStorage.setItem('registeredPassword', fields.password);

    navigate("/user-login");
  };

  return (
    <div className="register-container">
      <img src={logo} alt="logo" className="register-logo" />
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">Register</h2>
        <h3 className="register-subtitle">Please Register to Sign In</h3>

        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={fields.username}
          onChange={handleChange}
          className="register-input"
        />
        {errors.username && <p className="register-error">{errors.username}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          value={fields.phone}
          onChange={handleChange}
          className="register-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={fields.email}
          onChange={handleChange}
          className="register-input"
        />
        {errors.email && <p className="register-error">{errors.email}</p>}

        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          required
          value={fields.vehicleNumber}
          onChange={handleChange}
          className="register-input"
        />
        {errors.vehicleNumber && <p className="register-error">{errors.vehicleNumber}</p>}

        <div className="register-password-field">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            value={fields.password}
            onChange={handleChange}
            className="register-input"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="register-password-toggle"
          >
            {passwordVisible ? <MdVisibilityOff /> : <MdOutlineRemoveRedEye />}
          </button>
        </div>

        <div className="register-password-field">
          <input
            type={passwordVisible ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={fields.confirmPassword}
            onChange={handleChange}
            className="register-input"
          />
          {errors.password && <p className="register-error">{errors.password}</p>}
          {errors.confirmPassword && <p className="register-error">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="register-submit">
          Register
        </button>
        <div className="register-signin-link">
          <p>
            Already have an account?{" "}
            <Link to="/user-login" className="register-link">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
