import React, { use } from 'react';

const JobsCard = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    console.log(jobs)
    return (
        <div>
            
        </div>
    );
};

export default JobsCard;