import axios from "axios";
const configuredUrl = axios.create({
	baseURL: import.meta.env.VITE_APP_URL,
});
configuredUrl.interceptors.request.use((req) => {
	if (localStorage.getItem("token")) {
		req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
	}
	return req;
});

export default configuredUrl;
