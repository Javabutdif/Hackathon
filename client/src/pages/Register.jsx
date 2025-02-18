import { useState } from "react";
import { APP_NAME } from "../constants/constants";
import Form from "../components/form";
import { register } from "../../api/api_register";

function Register() {
    const [formData, setFormData] = useState({
			username: "",
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
			<div className="card bg-primary !text-primary-content md:w-2/3 md:mx-auto p-6 shadow-lg">
				<div className="card-body">
					<h2 className="text-center mb-2">{APP_NAME}</h2>
					<h4 className="text-center">Register as a Volunteer!</h4>
					<form onSubmit={handleSubmit}>
						<fieldset className="fieldset border-1 rounded-box p-4">
							<legend className="fieldset-legend">User Credentials</legend>
							<label>Username</label>
							<input
								className="input input-primary"
								type="text"
								name="username"
								value={formData.username}
								onChange={handleChange}
								maxLength={20}
							/>
							<label>Email</label>
							<input
								className="input input-primary"
								type="email"
								placeholder="e.g. johndoe@gmail.com"
								name="email"
								value={formData.email}
								onChange={handleChange}
								maxLength={20}
							/>
							<label>Password</label>
							<input
								className="input input-primary"
								type="password"
								placeholder="••••••••••••"
								name="password"
								value={formData.password}
								onChange={handleChange}
								required
							/>
							<label>Confirm Password</label>
							<input
								className="input input-primary"
								type="password"
								placeholder="••••••••••••"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleChange}
								required
							/>
						</fieldset>
						<fieldset className="fieldset border-1 rounded-box p-4">
							<legend className="fieldset-legend">Personal Information</legend>
							<label>Firstname</label>
							<input
								className="input input-primary"
								type="text"
								placeholder="e.g. John"
								name="firstname"
								value={formData.firstname}
								onChange={handleChange}
								required
							/>
							<label>Lastname</label>
							<input
								className="input input-primary"
								type="text"
								placeholder="e.g. Doe"
								name="lastname"
								value={formData.lastname}
								onChange={handleChange}
								required
							/>
							<label>Phone Number</label>
							<input
								type="tel"
								name="phoneNumber"
								placeholder="e.g. 09695446010"
								value={formData.phoneNumber}
								onChange={handleChange}
								required
								className="input input-bordered w-full mb-2"
							/>
							<label>Address</label>
							<input
								type="text"
								name="address"
								placeholder="Address"
								value={formData.address}
								onChange={handleChange}
								required
								className="input input-bordered w-full mb-4"
							/>
						</fieldset>
						<p className="text-center text-xs my-2">
							Already logged in?{" "}
							<a className="hover:underline" href="/login">
								Login
							</a>{" "}
							here
						</p>
						<button type="submit" className="btn btn-success w-full">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		);
}

export default Register;
