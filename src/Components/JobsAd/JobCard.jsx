import React from "react";
import { Link } from "react-router";

const JobCard = ({job}) => {
    const {_id, applicationDeadline, category, jobType, location, title, company_logo, responsibilities, requirements, company } = job;
  return (
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={company_logo}
            alt={company}
            className="w-16 h-16 object-contain"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {title}
            </h2>
            <h2 className="text-lg font-serif font-bold text-gray-700">{company}</h2>
            <p className="text-sm text-gray-500">
              {category} · {jobType} · {location}
            </p>
            
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Requirements
          </h3>
          <ul className="space-x-2 space-y-2 list-disc list-inside text-gray-700">
            {requirements.map((req, idx) => (
              <li
                key={idx}
                className="bg-blue-100 px-3 py-1 rounded text-blue-800 font-medium inline-block"
              >
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Responsibilities
          </h3>
          <ul className="space-y-2 space-x-2 text-gray-700">
            {responsibilities.map((resp, idx) => (
              <li
                key={idx}
                className="bg-green-100 px-3 py-1 rounded text-green-800 font-medium inline-block"
              >
                {resp}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          <strong>Deadline:</strong> {applicationDeadline}
        </p>
        <div className="pt-5">
            <Link to={`/details/${_id}`}><button className="btn btn-info">Details</button></Link>
        </div>
      </div>
  );
};

export default JobCard;
