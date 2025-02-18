import { server_connection } from "./connection";
import axios from "axios";

export const login = async (data) => {
	try {
		const response = await axios.post(
			`${server_connection()}/api/login`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		alert(response.data.data.name);
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

// username,
// 	firstname,
// 	lastname,
// 	password,
// 	email,
// 	address,
// 	organization,
// 	role,
