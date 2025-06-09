import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    applicationDeadline,
    category,
    jobType,
    location,
    title,
    company_logo,
    responsibilities,
    requirements,
    company,
    salaryRange,
    hr_name,
    hr_email,
    description,
  } = job;
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 py-8">
      {/* Title Centered */}
      <div className="flex items-center justify-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          {title}
        </h1>
      </div>

      {/* Job Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 pb-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 pb-6">
          <img
            src={company_logo}
            alt={company}
            className="w-20 h-20 object-contain"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              {company}
            </h2>
            <p className="text-gray-600">Location : {location}</p>
            <p className="text-gray-600">Category: {category}</p>
            <p className="text-gray-600">Job Type: {jobType}</p>
          </div>
        </div>

        {/* Description */}
        <h1 className="text-gray-800 font-bold text-lg">Description</h1>
        <p className="text-gray-700 text-lg pb-6">{description}</p>

        {/* Salary & Deadline */}
        <div className="flex flex-col sm:flex-row sm:justify-between text-gray-700 pb-6">
          <p>
            <strong>Salary:</strong> <span className="font-bold capitalize">{salaryRange.currency}</span> {salaryRange.min} – {salaryRange.min}          </p>
          <p>
            <strong>Deadline:</strong> {applicationDeadline}
          </p>
        </div>

        {/* Requirements */}
        <div className="pb-6">
          <h3 className="text-lg font-semibold pb-2 text-gray-800">
            Requirements
          </h3>
          <ul className="flex flex-wrap gap-2">
            {requirements.map((item, idx) => (
              <li
                key={idx}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="pb-6">
          <h3 className="text-lg font-semibold pb-2 text-gray-800">
            Responsibilities
          </h3>
          <ul className="space-y-2 text-gray-700">
            {responsibilities.map((item, idx) => (
              <li
                key={idx}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-md font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* HR Info and Apply Button */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
          <div className="text-sm text-gray-600 text-center sm:text-left space-y-2">
            <p>
              <strong>HR Contact:</strong> {hr_name}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:recruitment@brightmark.com"
                className="text-blue-600 underline"
              >
                {hr_email}
              </a>
            </p>
          </div>

          <Link
            to={`/applyjob/${_id}`}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
