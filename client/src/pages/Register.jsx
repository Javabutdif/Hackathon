import { useState } from "react";
import { APP_NAME } from "../constants/constants";
import Form from "../components/form";
import { register } from "../../api/api_register";

function Register() {
	const [formData, setFormData] = useState({
		email: "",
		firstname: "",
		lastname: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
		companyName: "",
		address: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await register(formData);
			console.log("Registration successful:", response);
		} catch (error) {
			console.error("Registration failed:", error);
		}
	};

	return (
		<div className="card bg-base-300 md:w-1/2 md:mx-auto p-6 shadow-lg">
			<div className="card-body">
				<h3 className="text-center font-bold text-xl mb-4">
					{APP_NAME} - Sign Up
				</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
						className="input input-bordered w-full mb-2"
					/>
					<input
						type="text"
						name="firstname"
						placeholder="First Name"
						value={formData.firstname}
						onChange={handleChange}
						required
						className="input input-bordered w-full mb-2"
					/>
					<input
						type="text"
						name="lastname"
						placeholder="Last Name"
						value={formData.lastname}
						onChange={handleChange}
						required
						className="input input-bordered w-full mb-2"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
						required
						className="input input-bordered w-full mb-2"
					/>
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						value={formData.confirmPassword}
						onChange={handleChange}
						required
						className="input input-bordered w-full mb-2"
					/>
					<input
						type="tel"
						name="phoneNumber"
						placeholder="Phone Number"
						value={formData.phoneNumber}
						onChange={handleChange}
						required
						className="input input-bordered w-full mb-2"
					/>
					<input
						type="text"
						name="address"
						placeholder="Address"
						value={formData.address}
						onChange={handleChange}
						required
						className="input input-bordered w-full mb-4"
					/>

					<button type="submit" className="btn btn-primary w-full">
						Sign Up
					</button>
				</form>
				<p className="text-sm text-center mt-4">
					Already have an account?{" "}
					<a href="/login" className="text-primary underline">
						Login
					</a>{" "}
					here!
				</p>
			</div>
		</div>
	);
}

export default Register;
