import React from "react";

function MyActivities() {
  return (
    <div className="p-10 lg:p-20">
      <div>
        <h2 className="text-2xl font-bold mb-6">My Activities</h2>
        <div className="grid gap-4">
          {/* Stats */}
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Volunteer Hours</div>
              <div className="stat-value">65</div>
              <div className="stat-desc">5% more than last month</div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Event Count</div>
              <div className="stat-value">4</div>
              <div className="stat-desc">120% more than last month</div>
            </div>
          </div>
          {/* Activity Log Table */}
          <div className="card overflow-x-auto shadow-xl border-none rounded-box">
            <div className="card-body w-full">
              <h4>Activity Log</h4>
              <div className=" w-full">
                <table className="table w-full table-zebra">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Event Name</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Duration (hours)</th>
                      <th>Organization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>Community Clean-Up</td>
                      <td>2025-02-15</td>
                      <td>09:00 AM</td>
                      <td>3</td>
                      <td>Green Earth</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Food Drive</td>
                      <td>2025-02-20</td>
                      <td>10:00 AM</td>
                      <td>4</td>
                      <td>Helping Hands</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Tree Planting</td>
                      <td>2025-02-25</td>
                      <td>08:30 AM</td>
                      <td>2</td>
                      <td>Eco Warriors</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* You can add more content here if needed */}
        </div>
      </div>
    </div>
  );
}

export default MyActivities;
