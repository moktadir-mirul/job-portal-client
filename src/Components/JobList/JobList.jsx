import React, { use } from "react";

const JobList = ({applicantsPromise}) => {
    const applications = use(applicantsPromise);

  return (
    <div>
      <div className="w-11/12 mx-auto py-5">
        <div className="overflow-x-auto rounded-box border border-gray-700 bg-gray-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Company Logo</th>
                <th>Email</th>
                <th>Job Details</th>
                <th>Conatct Address</th>
              </tr>
            </thead>

            <tbody>
              {
                applications.map((app, index) => <tr key={app._id}>
                <th>{index + 1}</th>
                <th><img className="w-16 h-16" src={app.logo} alt={app.company} /></th>
                <td>{app.email}</td>
                <td>
                    <p className="text-xl font-bold">{app.title}</p>
                    <p className="font-semibold text-base">{app.company}</p>
                </td>
                <td>{app.location}</td>
              </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobList;
