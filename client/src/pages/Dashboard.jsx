import { Outlet, Link } from 'react-router-dom';
import { getInformationData } from "../data_management/data_information.js";

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

export default Dashboard;
