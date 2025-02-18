import React, { useState } from "react";
import { requestOrganization } from "../../api/api_user";
import { getInformationData } from "../data_management/data_information";

const CreateModal = ({ onClose, onSave }) => {
	const [organizationName, setOrganizationName] = useState("");
	const [description, setDescription] = useState("");
	const user = getInformationData();
	const handleSave = async () => {
		const formData = new FormData();
		formData.append("organizationName", organizationName);
		formData.append("description", description);
		formData.append("name", user);

		if (await requestOrganization(formData)) {
			onClose();
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-xl font-semibold mb-4">Create Organization</h2>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Organization Name:
					</label>
					<input
						type="text"
						className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
						value={organizationName}
						onChange={(e) => setOrganizationName(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">
						Description:
					</label>
					<textarea
						className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className="flex justify-end space-x-2">
					<button
						className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
						onClick={onClose}>
						Cancel
					</button>
					<button
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
						onClick={handleSave}>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateModal;
