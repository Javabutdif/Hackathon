import { useState, useEffect } from "react";
import CreateModal from "../components/CreateModal";
import JoinModal from "../components/JoinModal";
import { getAllEvents } from "../../api/api_user";

function Events() {
	const [viewModal, setViewModal] = useState(false);
	const [eventData, setEventData] = useState([]);
	const [joinModal, setJoinModal] = useState(false);

	const handleFetchEvent = async () => {
		const response = await getAllEvents();
		setEventData(response || []); // Ensure response is always an array
	};

	useEffect(() => {
		handleFetchEvent();
	}, []);

	const handleViewModal = () => setViewModal(true);
	const handleHideModal = () => setViewModal(false);

	const handleJoinModal = () => setJoinModal(true);
	const handleHideJoinModal = () => setJoinModal(false);

	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold">Events</h2>
				<button
					onClick={handleViewModal}
					className="bg-blue-500 text-white px-4 py-2 rounded">
					Create
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{eventData.map((event) => (
					<div key={event._id} className="card bg-base-100 w-96 shadow-sm">
						<p className="mt-5">{new Date(event.date).toLocaleString()}</p>
						<div className="card-body">
							<h2 className="card-title">{event.eventName}</h2>
							<p>{event.description}</p>
							<div className="card-actions justify-end">
								<button
									onClick={handleJoinModal}
									className="btn btn-primary !text-white">
									Join Now
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			{viewModal && <CreateModal type="Event" onClose={handleHideModal} />}
			{joinModal && <JoinModal onClose={handleHideJoinModal} />}
		</div>
	);
}

export default Events;
