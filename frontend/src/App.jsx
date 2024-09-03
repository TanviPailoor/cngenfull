import io from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Parent,
	Register,
	Login,
	EditProfile,
	Schedules,
	Referral,
	Notification,
	Home,
	Profile,
	Tasks,
	Employees,
	MainLogin,
	Admin,
} from "./employee/pages/index";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileDrawer from "./user/userComponents/profileDrawer/ProfileDrawer";
import VehicleDetails from "./user/userComponents/vehicledetails/VehicleDetails";
import Book from "./user/userComponents/books/Book";
import PrivateRoute from "./user/userComponents/PrivateRoute";
import NotificationPage from "./user/userPages/notificationpage/NotificationPage";
import BookingPage from "./user/userPages/Bookingpage/BookingPage";
import EditLocationPage from "./user/userPages/editlocationpage/EditLocation";
import FuelPrice from "./user/userPages/fuelprice/FuelPrice";
import UHome from "./user/userPages/home/UHome";
import ULogin from "./user/userPages/login/ULogin";
import ProfilePage from "./user/userPages/profilepage/ProfilePage";
import ServicesPage from "./user/userPages/servicespage/ServicesPage";
import SettingPage from "./user/userPages/settingspage/SettingPage";
import URegister from "./user/userComponents/register/URegister";
import Assigntask from "./employee/pages/admin/assigntask/Assigntask";
const App = () => {
	const { loginInfo } = useSelector((state) => state.aslice);
	const socket = io("http://localhost:8600");
	useEffect(() => {
		console.log(loginInfo);
		if (loginInfo) {
			socket.emit("joinRoom", loginInfo?._id);
			socket.on("connect", () => {
				console.log("Connected to the server");
			});
		}
		return () => {
			socket.disconnect();
		};
	}, [socket]);
	return (
		<section className="font">
			<BrowserRouter>
				<Routes>
					<Route path="/mainLogin" element={<MainLogin />} />
					<Route path="/emp-register" element={<Register />} />
					<Route path="/emp-login" element={<Login />} />
					<Route path="/" element={<Parent />}>
						<Route index element={<Home socket={socket} />} />
						<Route path="profile" element={<Profile />} />
						<Route path="profile/editprofile" element={<EditProfile />} />
						<Route path="schedule" element={<Schedules />} />
						<Route path="performance" element={<Performance />} />
						<Route path="referral" element={<Referral />} />
						<Route path="notification" element={<Notification />} />
						<Route path="admin/*" element={<Admin socket={socket} />}>
							<Route path="employees" element={<Employees />} />
							<Route path="tasks" element={<Tasks />} />
							<Route path="assigntasks" element={<Assigntask />} />
						</Route>
					</Route>
					<Route path="/user-login" element={<ULogin />} />
					<Route path="/user-register" element={<URegister />} />
					<Route
						path="/user-home"
						element={
							<PrivateRoute>
								<UHome />
							</PrivateRoute>
						}
					/>
					<Route path="/notifications" element={<NotificationPage />} />
					<Route path="/booking" element={<BookingPage />} />
					<Route path="/services" element={<ServicesPage />} />
					<Route
						path="/myprofile"
						element={
							<PrivateRoute>
								<ProfilePage />
							</PrivateRoute>
						}
					/>
					<Route
						path="/location"
						element={
							<PrivateRoute>
								<EditLocationPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="/settings"
						element={
							<PrivateRoute>
								<SettingPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="/profile"
						element={
							<PrivateRoute>
								<ProfileDrawer />
							</PrivateRoute>
						}
					/>
					<Route
						path="/fuelprice"
						element={
							<PrivateRoute>
								<FuelPrice />
							</PrivateRoute>
						}
					/>
					<Route
						path="/vehicle/:type"
						element={
							<PrivateRoute>
								<VehicleDetails />
							</PrivateRoute>
						}
					/>
					<Route
						path="/book"
						element={
							<PrivateRoute>
								<Book />
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</section>
	);
};

export default App;
