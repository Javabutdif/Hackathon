import { server_connection } from "./connection";
import axios from "axios";
import { setInformationData } from "../src/data_management/data_information";

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
		setInformationData(response.data.data, response.data.role);
		alert(response.data.message);
		return response.status === 200 ? true: false;
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
