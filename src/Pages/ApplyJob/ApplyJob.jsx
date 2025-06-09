import React, { useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthCOntext";
import { toast } from "react-toastify";

const ApplyJob = () => {
    const {id : jobId} = useParams();
    const {user} = useContext(AuthContext);

    const handleApplyJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const appliedJob = Object.fromEntries(formData.entries());
        console.log(appliedJob);
        const {linkedin, github, resume, location} = appliedJob;
        const applicant = {
            jobId,
            email: user.email,
            linkedin,
            github, 
            resume,
            location
        }
        fetch("http://localhost:4000/applications", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(applicant)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast("Applied to job successfullty");
            }
        })
        .catch(err => {
            toast.error(err.message);
        })
    }
  return (
    <div className="py-5 flex flex-col justify-center items-center">
      <form onSubmit={handleApplyJob} className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-md lg:w-lg flex flex-col justify-center items-center border p-4">
        <h1 className="py-5 text-center text-4xl font-bold">Apply Job</h1>

        <label className="label font-semibold text-2xl py-2">LinkedIn Profile</label>
        <input type="url" name="linkedin" className="input w-full" placeholder="LinkedIn Profile Url" />

        <label className="label font-semibold text-2xl py-2">Github Profile</label>
        <input type="url" name="github" className="input w-full" placeholder="Github Profile Link" />

        <label className="label font-semibold text-2xl py-2">Resume</label>
        <input type="text" name="resume" className="input w-full" placeholder="Resume Link" />

        <label className="label font-semibold text-2xl py-2">Current Location</label>
        <input type="text" name="location" className="input w-full" placeholder="Current Location" />

        <div className="py-5 flex justify-center">
            <input type="submit" className="btn btn-primary" value="Apply" />
        </div>
      </form>
    </div>
  );
};

export default ApplyJob;
