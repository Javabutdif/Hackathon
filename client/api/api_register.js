import { server_connection } from "./connection";
import axios from "axios";

export const register = async (data) => {
	try {
		const response = await axios.post(
			`${server_connection()}/api/register`,
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

// username,
// 	firstname,
// 	lastname,
// 	password,
// 	email,
// 	address,
// 	organization,
// 	role,
