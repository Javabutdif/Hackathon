import { useState } from "react";
import { APP_NAME } from "../constants/constants";
import { register } from "../../api/api_register";
import volunteerism from "../assets/images/volunteerism.jpg";
import raised_hands from "../assets/images/vector/volunteeer_raised_hands.jpg";


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
    <div className="w-full grid grid-cols-2 max-lg:grid-cols-1">
      <div className="w-full p-20 md:p-10">
        <div className="!text-primary-content p-6">
          <div className="card-body">
            <h2 className="text-center mb-2">{APP_NAME}</h2>
            <h4 className="text-center">Register now</h4>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset p-4">
                <legend className="fieldset-legend">User Credentials</legend>
                <label>Username</label>
                <input
                  className="input input-primary w-full"
                  type="text"
                  name="username"
                  placeholder="e.g. JohnDoe"
                  value={formData.username}
                  onChange={handleChange}
                  maxLength={20}
                />
                <label>Email</label>
                <input
                  className="input input-primary w-full"
                  type="email"
                  placeholder="e.g. johndoe@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={20}
                />
                <label>Password</label>
                <input
                  className="input input-primary w-full"
                  type="password"
                  placeholder="••••••••••••"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label>Confirm Password</label>
                <input
                  className="input input-primary w-full"
                  type="password"
                  placeholder="••••••••••••"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <fieldset className="fieldset p-4">
                <legend className="fieldset-legend">
                  Personal Information
                </legend>
                <label>Firstname</label>
                <input
                  className="input input-primary w-full"
                  type="text"
                  placeholder="e.g. John"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <label>Lastname</label>
                <input
                  className="input input-primary w-full"
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
                  className="input input-primary w-full mb-2"
                />
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="e.g. Cebu City, Philippines"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="input input-primary w-full mb-4"
                />
              </fieldset>
              <p className="text-center text-xs my-8">
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
      </div>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${raised_hands})`,
          backgroundSize: "cover",
          backgroundPosition: "25% 50%",
          backgroundAttachment: "fixed",
        }}
      ></div>
    </div>
  );
}

export default Register;
