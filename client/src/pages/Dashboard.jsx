// Dashboard.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";

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

export default Dashboard;
