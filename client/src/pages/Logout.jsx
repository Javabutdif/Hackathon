import { Link } from "react";

function Logout() {
  return (
    <div className="p-20 min-h-screen">
      <h2>You have been logged out.</h2>
      <hr className="my-4 border-neutral-600"/>
      <p className="!indent-0">Go back to <a href="/login" className="hover:underline">Login</a> page.</p>
    </div>
  );
}

export default Logout;
