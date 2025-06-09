import React from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const ViewApplication = () => {
  const { job_id } = useParams();
  const applicants = useLoaderData();
  const handleStatusChange = (e, app_id) => {
    const currentStatus = e.target.value;
    fetch(`http://localhost:4000/applications/${app_id}`, {
        method: "PATCH",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({status : currentStatus})
    })
    .then((res) => res.json())
    .then(data => {
        if(data.modifiedCount) {
            toast.success("Applicant status updated successfully")
        }
    })
    .catch(err => toast(err.message))
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-5">
        Applications for: {job_id}
      </h1>
      <h1 className="text-center text-2xl font-semibold py-5">
        Number of Applications: {applicants.length}
      </h1>
      <div>
        {applicants.map((app) => (
          <div
            className="mb-5 bg-gray-100 border border-gray-400 p-5 rounded-xl"
            key={app._id}
          >
            <h1>email : {app.email}</h1>
            <h1>Lication: {app.location}</h1>
            <h1 className="pt-2 font-bold text-lg">Applicant Status</h1>
            <select onChange={(e) => handleStatusChange(e, app._id)} defaultValue={app.status.status} className="select">
              <option disabled={true}>Update Status</option>
              <option>Pending</option>
              <option>Hired</option>
              <option>Rejected</option>
              <option>Called for Interview</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewApplication;
