import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cngenlogo from "../../../assets/images/cngenlogo.png";
import "./MainLogin.scss";
const MainLogin = () => {
	const [role, setRole] = useState("");
	const [sinvi, setSinvi] = useState(true);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (role === "employee") {
			navigate("/emp-login");
		} else if (role === "user") {
			navigate("/user-login");
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setSinvi(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<>
			{sinvi ? (
				<div className="splash-screen">
					<img src={cngenlogo} alt="Splash" className="splash-image" />
				</div>
			) : (
				<section className="main-login-container">
					<section className="main-login-child">
						<form onSubmit={handleSubmit}>
							<h2>Select your Login</h2>
							<section className="radio-group">
								<label>
									<input
										type="radio"
										name="role"
										value="employee"
										checked={role === "employee"}
										onChange={(e) => setRole(e.target.value)}
									/>
									<span>Employee</span>
								</label>
								<label>
									<input
										type="radio"
										name="role"
										value="user"
										checked={role === "user"}
										onChange={(e) => setRole(e.target.value)}
									/>
									<span>User</span>
								</label>
							</section>
							<button type="submit" className="login-button">
								Login
							</button>
						</form>
					</section>
				</section>
			)}
		</>
	);
};

export default MainLogin;
