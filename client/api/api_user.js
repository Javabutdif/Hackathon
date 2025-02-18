import { server_connection } from "./connection";
import axios from "axios";

export const requestOrganization = async (data) => {
	try {
		const response = await axios.post(
			`${server_connection()}/api/organization/request`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		alert(response.data.message);
		return response.status === 200 ? true : false;
	} catch (error) {
		if (error.response && error.response.data) {
			return false;
		} else {
			console.log("error", "An error occurred");
			return false;
		}
	}
};


export const createEvent = async (data) => {
	try {
		const response = await axios.post(
			`${server_connection()}/api/event/create`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		alert(response.data.message);
		return response.status === 200 ? true : false;
	} catch (error) {
		if (error.response && error.response.data) {
			return false;
		} else {
			console.log("error", "An error occurred");
			return false;
		}
	}
};

export const getAllOrganization = async (data) => {
	try {
		const response = await axios.get(
			`${server_connection()}/api/organization/get-all`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		return response.status === 200 ? response.data.data : [];
	} catch (error) {
		if (error.response && error.response.data) {
			return false;
		} else {
			console.log("error", "An error occurred");
			return false;
		}
	}
};

export const getAllEvents = async (data) => {
	try {
		const response = await axios.get(
			`${server_connection()}/api/event/get-all`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log(response.data.data);
		return response.status === 200 ? response.data.data : [];
	} catch (error) {
		if (error.response && error.response.data) {
			return false;
		} else {
			console.log("error", "An error occurred");
			return false;
		}
	}
};
