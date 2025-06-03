import React, { Suspense } from 'react';
import JobsCard from './JobsCard';
const jobsPromise = fetch('http://localhost:4000/jobs').then(res => res.json())
const JobsAd = () => {
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-800 py-5 text-center'>Featured Jobs</h1>
            <Suspense fallback={<p>data loading....</p>}>
                <JobsCard jobsPromise={jobsPromise}></JobsCard>
            </Suspense>
        </div>
    );
};

export default JobsAd;