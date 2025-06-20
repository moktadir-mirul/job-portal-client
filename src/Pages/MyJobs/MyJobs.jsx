import React, { Suspense, useContext } from "react";
import JobList from "../../Components/JobList/JobList";
import Loader from "../../Components/Loader/Loader";
import { applicantPromise } from "../../api/applicantApi";
import { AuthContext } from "../../AuthProvider/AuthCOntext";

const MyJobs = () => {
  const {user} = useContext(AuthContext);

  return (
    <div>
      <h1 className="py-5 text-4xl font-bold text-center">My Applied Jobs</h1>
      <Suspense fallback={<Loader></Loader>}>
        <JobList applicantsPromise={applicantPromise(user.email)}></JobList>
      </Suspense>
    </div>
  );
};

export default MyJobs;
