import Axios from "axios";

const axios = Axios.create({
	baseUrl: "http://localhost:",
	headers: {
		contentType: "application/json",
	},
});

export const getData = () => {
	return axios.get("/");
};
