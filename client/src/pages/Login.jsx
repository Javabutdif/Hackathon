import { APP_NAME } from "../constants/constants";
import Form from "../components/Form";

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
    <div className="card bg-primary !border-primary text-primary-content md:w-1/2 md:mx-auto">
      <div className="card-body">
        <h2 className="text-center">{APP_NAME}</h2>
        <Form
          onSubmit="#"
          action="#"
          submitLabel="Login"
          fieldsetLegend="Login"
          inputElements={inputElements}
        />
        <p className="text-center text-xs">
          New user?{" "}
          <a className="a-default" href="/register">
            Register
          </a>{" "}
          here!
        </p>
      </div>
    </div>
  );
}

export default Login;
