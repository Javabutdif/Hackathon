import { useState } from "react";
import { getInformationData } from "../data_management/data_information";
function JoinModal({ onClose }) {
	const user = getInformationData();
	const [isOpen, setIsOpen] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Joining with:", { name, email });
		setIsOpen(false);
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-xl font-bold mb-4">Join Now</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm font-medium">Name</label>
						<input
							type="text"
							className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={user}
							onChange={(e) => setName(e.target.value)}
							disabled
						/>
					</div>

					<div className="flex justify-end space-x-2">
						<button
							type="button"
							className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
							onClick={onClose}>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
							Join
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default JoinModal;
