import React, { useEffect, useState } from "react";
import "./Register.scss";
import logo from "../../../../assets/images/logo.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
	MdOutlineCloudUpload,
	MdOutlineRemoveRedEye,
	MdVisibilityOff,
} from "react-icons/md";
import { registerAction } from "../../../../employee/redux/actions/authactions";
const Register = () => {
	const dispatch = useDispatch();
	const { loading, error, registerInfo } = useSelector((state) => state.aslice);
	const [fields, setFields] = useState({
		name: "",
		phone: "",
		location: "",
		email: "",
		password: "",
		confirmpassword: "",
		description: "",
		image: "",
		previewImg: "",
		serviceType: "",
	});

	const [errors, setErrors] = useState({});
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmpasswordvisible, setConfirmpasswordvisible] = useState(false);
	const navigate = useNavigate();

	const isValidName = (name) => {
		const nameRegex = /^[A-Za-z][A-Za-z0-9_]{3,29}$/;
		return nameRegex.test(name);
	};

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const isValidPhoneNumber = (phone) => {
		const phoneNumberRegex = /^\d{10}$/;
		return phoneNumberRegex.test(phone);
	};

	const isValidPassword = (password) => {
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return passwordRegex.test(password);
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
		setConfirmpasswordvisible(!confirmpasswordvisible);
	};

	const validateForm = () => {
		let newErrors = {};

		if (!fields.name) {
			newErrors.name = "Name is required";
		} else if (!isValidName(fields.name)) {
			newErrors.name = "Name should be only Alphabets";
		}

		if (!fields.email) {
			newErrors.email = "Email is required";
		} else if (!isValidEmail(fields.email)) {
			newErrors.email = "Invalid email format";
		}

		if (!fields.phone) {
			newErrors.phone = "Phone number is required";
		} else if (!isValidPhoneNumber(fields.phone)) {
			newErrors.phone = "Phone number must be 10 digits";
		}

		if (!fields.password) {
			newErrors.password = "Password is required";
		} else if (!isValidPassword(fields.password)) {
			newErrors.password =
				"Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
		}
		if (!fields.confirmpassword) {
			newErrors.confirmpassword = "Confirm password is required";
		} else if (fields.confirmpassword != fields.password) {
			newErrors.confirmpassword = "Passwords do not match";
		}
		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name == "image") {
			if (e.target.files.length !== 0) {
				let imgsrc = URL.createObjectURL(e.target.files[0]);
				console.log(imgsrc);

				setFields({
					...fields,
					previewImg: imgsrc,
					[name]: e.target.files[0],
				});
			}
		} else {
			setFields({
				...fields,
				[name]: value,
			});
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log("outside the form");
			if (validateForm()) {
				console.log("inside the form");
				dispatch(registerAction(fields));
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		if (registerInfo) {
			setFields({
				name: "",
				phone: "",
				location: "",
				email: "",
				password: "",
				confirmpassword: "",
				previewImg: "",
			});
			navigate("/emp-login");
			toast.success("user registered successfully");
		}
		if (error) {
			toast.error(error);
		}
	}, [loading, error, registerInfo]);
	return (
		<>
			<section className="register-container">
				<section className="register-top">
					<img src={logo} alt="logo" />
				</section>
				<section className="register-bottom">
					<form onSubmit={handleSubmit} className="register-form">
						<section className="register-heading">
							<h2>Register</h2>
							<p>Please register to login</p>
						</section>
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							required
							value={fields.name}
							onChange={handleChange}
						/>
						{errors.name && <span className="error">{errors.name}</span>}
						<input
							type="text"
							name="phone"
							placeholder="Mobile Number"
							required
							value={fields.phone}
							onChange={handleChange}
						/>
						{errors.phone && <span className="error">{errors.phone}</span>}
						<select
							name="serviceType"
							required
							value={fields.serviceType}
							onChange={handleChange}
						>
							<option value="" disabled>
								Car Wash
							</option>
							<option value="carwash">Car Wash</option>
						</select>
						<input
							type="text"
							name="location"
							placeholder="Address"
							required
							value={fields.location}
							onChange={handleChange}
						/>

						<input
							type="email"
							name="email"
							placeholder="Email"
							required
							value={fields.email}
							onChange={handleChange}
						/>
						{errors.email && <span className="error">{errors.email}</span>}

						<div className="register-password-container">
							<input
								type={passwordVisible ? "text" : "password"}
								name="password"
								placeholder="Password"
								required
								value={fields.password}
								onChange={handleChange}
								className="password-input"
							/>
							<label
								onClick={togglePasswordVisibility}
								className="password-toggle-label"
							>
								{passwordVisible ? (
									<MdVisibilityOff className="eye-icon" />
								) : (
									<MdOutlineRemoveRedEye className="eye-icon" />
								)}
							</label>
						</div>
						{errors.password && (
							<span className="error">{errors.password}</span>
						)}
						<div className="register-password-container">
							<input
								type={confirmpasswordvisible ? "text" : "password"}
								name="confirmpassword"
								placeholder="Confirm Password"
								required
								value={fields.confirmpassword}
								onChange={handleChange}
								className="password-input"
							/>
							<label
								onClick={togglePasswordVisibility}
								className="password-toggle-label"
							>
								{confirmpasswordvisible ? (
									<MdVisibilityOff className="eye-icon" />
								) : (
									<MdOutlineRemoveRedEye className="eye-icon" />
								)}
							</label>
						</div>
						{errors.confirmpassword && (
							<span className="error">{errors.confirmpassword}</span>
						)}
						<label htmlFor="file-upload" className="file-label">
							Upload Documents
							<MdOutlineCloudUpload className="upload-icon" />
						</label>
						<input
							id="file-upload"
							type="file"
							className="file-input"
							name="image"
							onChange={handleChange}
						/>
						{fields.previewImg && <img src={fields?.previewImg} alt="" />}
						<input
							type="text"
							name="description"
							placeholder="Description"
							// required
							value={fields.description}
							onChange={handleChange}
						/>

						<section className="register-btn-link">
							<button type="submit">Sign in</button>
							<section className="register-link">
								<p>Already have an account?</p>
								<Link to="/emp-login">Sign in</Link>
							</section>
						</section>
					</form>
				</section>
			</section>
		</>
	);
};

export default Register;
