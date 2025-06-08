import React, { use } from "react";

const JobList = ({applicantPromise}) => {
    const applications = use(applicantPromise);
    console.log(applications);
  return (
    <div>
      <div className="w-11/12 mx-auto py-5">
        <div className="overflow-x-auto rounded-box border border-gray-700 bg-gray-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job Details</th>
                <th>Favorite Color</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobList;
