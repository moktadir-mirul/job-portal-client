import React, { Suspense, useContext } from "react";
import PostedJobsTable from "../../Components/PostedJobsTable/PostedJobsTable";
import { AuthContext } from "../../AuthProvider/AuthCOntext";
import { postedJobsPromise } from "../../api/postedJobs";

const MyPostedJobs = () => {
    const {user} = useContext(AuthContext);

  return (
    <div className="py-5 w-11/12 mx-auto">
      <Suspense>
        <PostedJobsTable postedJobsPromise={postedJobsPromise(user.email)}></PostedJobsTable>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
