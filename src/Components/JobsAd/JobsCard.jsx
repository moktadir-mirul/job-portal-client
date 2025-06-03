import React, { use } from 'react';
import JobCard from './JobCard';

const JobsCard = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div className='max-w-11/12 mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
    );
};

export default JobsCard;