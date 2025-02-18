import { Link } from "react";

function Logout() {
  return (
    <div>
      <h2>You have been logged out.</h2>
      <hr className="my-4 border-neutral-600"/>
      <p className="!indent-0">Go back to <a href="/login" className="a-default">Login</a> page.</p>
    </div>
  );
}

export default Logout;
