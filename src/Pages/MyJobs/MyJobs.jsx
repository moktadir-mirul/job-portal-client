import React, { Suspense, useContext } from "react";
import JobList from "../../Components/JobList/JobList";
import Loader from "../../Components/Loader/Loader";
import { applicantPromise } from "../../api/applicantApi";
import { AuthContext } from "../../AuthProvider/AuthCOntext";

const MyJobs = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <JobList applicantPromise={applicantPromise(user.email)}></JobList>
      </Suspense>
    </div>
  );
};

export default MyJobs;
