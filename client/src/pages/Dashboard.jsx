import avatar from "../assets/images/avatar/avatar.jpg";
import { Outlet, Link } from 'react-router-dom';

import artwork1 from '../assets/images/artworks/artwork1.jpg';
import artwork2 from '../assets/images/artworks/artwork2.jpg';
import artwork3 from '../assets/images/artworks/artwork3.jpg';
import artwork4 from '../assets/images/artworks/artwork4.jpg';
import artwork5 from '../assets/images/artworks/artwork5.jpg';
import artwork6 from '../assets/images/artworks/artwork6.jpg';
import { USER_DETAILS, USER_ARTWORKS } from "../constants/constants";
import { getInformationData } from "../data_management/data_information";

const user = USER_DETAILS[0];
const artwork_urls = [
	artwork1,
	artwork2,
	artwork3,
	artwork4,
	artwork5,
	artwork6,
];
const data = getInformationData();
console.log("DashboardData: " + data.name);
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
