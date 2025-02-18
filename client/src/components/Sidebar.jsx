import { Link } from "react-router-dom";
const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
      <div className={`fixed inset-y-0 left-0 transform max-h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 bg-base-200 w-64 p-4 md:relative md:translate-x-0 md:w-64 md:h-full md:max-h-screen max-h-screen`}>
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul className="menu overflow-y-auto max-h-[calc(100vh-4rem)]"> {/* Keeps it scrollable with max-height */}
          <li><a href="#" className="active">Home</a></li>
          <li><Link to="/organization">Organizations</Link></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
        <button onClick={toggleSidebar} className="btn btn-primary mt-4 md:hidden">Close</button>
      </div>
    );
  };
  
  export default Sidebar;
  