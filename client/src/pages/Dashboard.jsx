// Dashboard.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";

<<<<<<< HEAD
const data = getInformationData();
//console.log("DashboardData: " + data.name === undefined ? "" : data.name);
function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Volunteer Dashboard</h1>
      <div className="tabs">
        <Link to="/volunteer/overview" className="tab tab-bordered">Overview</Link>
        <Link to="/volunteer/organizations" className="tab tab-bordered">My Organizations</Link>
        <Link to="/volunteer/events" className="tab tab-bordered">My Events</Link>
        <Link to="/volunteer/hours" className="tab tab-bordered">Volunteer Hours</Link>
        <Link to="/volunteer/profile" className="tab tab-bordered">Profile</Link>
        <Link to="/volunteer/notifications" className="tab tab-bordered">Notifications</Link>
        <Link to="/volunteer/settings" className="tab tab-bordered">Settings</Link>
      </div>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
=======
const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex">
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<div className="flex-1 p-6">
				<button
					onClick={toggleSidebar}
					className="btn btn-primary mb-4 md:hidden">
					Toggle Sidebar
				</button>
				<h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
				<p className="mt-4">This is your main content area.</p>
			</div>
		</div>
	);
};
>>>>>>> 21a57d42f28c7c0f7d70ab516dc935b40d3304b5

export default Dashboard;
