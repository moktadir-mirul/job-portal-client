export const postedJobsPromise = (email) => {
    return fetch(`http://localhost:4000/jobs/applications?email=${email}`).then(res => res.json())
}