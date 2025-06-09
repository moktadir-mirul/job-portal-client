import React, { use } from "react";
import { Link } from "react-router";

const PostedJobsTable = ({ postedJobsPromise }) => {
  const postedJobs = use(postedJobsPromise);

  return (
    <div>
      <div className="overflow-x-auto bg-gray-100 border border-gray-700">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job Name</th>
              <th>Company</th>
              <th>Deadline</th>
              <th>No. Of Applications</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {postedJobs.map((job, idx) => (
              <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.application_count}</td>
                <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedJobsTable;
