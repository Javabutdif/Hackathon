import { useState, useEffect } from "react";
import CreateModal from "../components/CreateModal";
import { getAllOrganization } from "../../api/api_user";

function Organization() {
	const [organizations, setOrganizations] = useState([]);
	const [viewModal, setViewModal] = useState(false);

	const handleFetchOrganization = async () => {
		const response = await getAllOrganization();
		setOrganizations(response);
	};

	const handleViewModal = () => {
		setViewModal(true);
	};
	const handleHideModal = () => {
		handleFetchOrganization();

		setViewModal(false);
	};

	useEffect(() => {
		handleFetchOrganization();
	}, []);

	return (
		<div className="p-4">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold">Organizations</h2>
				<button
					onClick={handleViewModal}
					className="bg-blue-500 text-white px-4 py-2 rounded">
					Create
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{organizations.map((org) => (
					<div key={org._id} className="card bg-gray-100 p-4 rounded shadow">
						<h3 className="text-lg font-semibold">{org.orgName}</h3>
						<p className="text-sm text-gray-700">{org.description}</p>
					</div>
				))}
			</div>
			{viewModal && (
				<>
					<CreateModal onClose={handleHideModal} />
				</>
			)}
		</div>
	);
}

export default Organization;
