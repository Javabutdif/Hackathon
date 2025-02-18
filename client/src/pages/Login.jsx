import { useState } from "react";
import { APP_NAME } from "../constants/constants";
import { login } from "../../api/api_login";
import { useNavigate } from "react-router-dom";

function Login() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Login submitted:", formData);
		if (await login(formData)) {
			navigate("/dashboard");
		}
	};

	return (
		<div className="card bg-primary !border-primary text-primary-content md:w-2/3 md:mx-auto p-6 shadow-lg">
			<div className="card-body">
				<h2 className="text-center mb-2 font-bold text-xl">{APP_NAME}</h2>
				<h4 className="text-center text-lg">Login as a Volunteer!</h4>
				<form onSubmit={handleSubmit}>
					<fieldset className="fieldset border-1 rounded-box p-4">
						<legend className="fieldset-legend">Enter User Credentials</legend>
						<label className="block mb-1">Username</label>
						<input
							className="input input-bordered w-full mb-3"
							type="text"
							name="username"
							placeholder="Enter username"
							value={formData.username}
							onChange={handleChange}
							required
							maxLength={20}
						/>
						<label className="block mb-1">Password</label>
						<input
							className="input input-bordered w-full mb-3"
							type="password"
							name="password"
							placeholder="••••••••••••"
							value={formData.password}
							onChange={handleChange}
							required
							maxLength={20}
						/>
					</fieldset>
					<button type="submit" className="btn btn-success w-full mt-3">
						Login
					</button>
				</form>
				<p className="text-center text-sm mt-4">
					New user?{" "}
					<a className="hover:underline" href="/register">
						Register
					</a>{" "}
					here!
				</p>
			</div>
		</div>
	);
}

export default Login;
