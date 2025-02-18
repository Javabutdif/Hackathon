import { APP_NAME } from "../constants/constants";
// import Form from "../components/Form";

function Login() {
  const inputElements = [
    {
      label: "Username",
      type: "text",
      placeHolder: "Enter username",
      className: "",
      attribs: {
        maxLength: 20,
        required: true,
      },
    },
    {
      label: "Password",
      type: "password",
      placeHolder: "•••••••••••",
      className: "",
      attribs: {
        maxLength: 20,
        required: true,
      },
    },
  ];

  return (
    <div className="card bg-primary !border-primary text-primary-content md:w-2/3 md:mx-auto">
      <div className="card-body">
        <h2 className="text-center mb-2">{APP_NAME}</h2>
        <h4 className="text-center">Login as a Volunteer!</h4>
        <form action="">
          <fieldset className="fieldset border-1 rounded-box p-4">
            <legend className="fieldset-legend">Enter User Credentials</legend>
            <label>Username</label>
            <input className="input input-primary" type="text" placeholder="Enter username" required maxLength={20} />
            <label>Password</label>
            <input className="input input-primary" type="password" placeholder="••••••••••••" required maxLength={20} />
          </fieldset>
        </form>
        <p className="text-center text-xs">
          New user?{" "}
          <a className="hover:underline" href="/register">
            Register
          </a>{" "}
          here!
        </p>
        <button className="btn btn-success">Login</button>
      </div>
    </div>
  );
}

export default Login;
