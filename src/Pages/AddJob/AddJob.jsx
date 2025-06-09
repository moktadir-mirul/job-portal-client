import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthCOntext";
import { toast } from "react-toastify";

const AddJob = () => {
    const {user} = useContext(AuthContext);

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const addJobData = Object.fromEntries(formData.entries());
        
        
        const {min, max, currency, ...rest} = addJobData;
        rest.salaryRange = {min, max, currency};

        const requirementsClean = rest.requirements.split(",").map(req => req.trim());
        rest.requirements = requirementsClean;
        const responsibilitiesClean = rest.responsibilities.split(",").map(res => res.trim());
        rest.responsibilities = responsibilitiesClean;
        rest.status = "active";
console.log(rest);

        fetch("http://localhost:4000/jobs", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(rest)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
            console.log(data)
            toast.success("Job added")
            }
            
        })
        .catch(err => {
            toast.error(err.message)
        })
    } 
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-5">Add a Job</h1>
      <form onSubmit={handleAddJob}>
        <div className="w-11/12 mx-auto py-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="fieldset-legend">Title</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Job Title"
              name="title"
            />
          </div>
          <div>
            <label className="fieldset-legend">Location</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Job Location"
              name="location"
            />
          </div>
          <div>
            <label className="fieldset-legend">Job Type</label>
            <input className="btn" type="radio" name="jobType" value="remote" aria-label="Remote"/>
            <input className="btn ml-2" type="radio" name="jobType" value="on-site" aria-label="On-Site"/>
            <input className="btn ml-2" type="radio" name="jobType" value="hybrid" aria-label="Hybrid"/>
          </div>
          <div>
            <label className="fieldset-legend">Category</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Job Category"
              name="category"
            />
          </div>
          <div>
            <label className="fieldset-legend">Application Deadline</label>
            <input
              type="date"
              className="input w-full"
              placeholder="Job Title"
              name="applicationDeadline"
            />
          </div>
          <div>
            <label className="fieldset-legend">Salary Range</label>
            <div className="flex gap-2 ">
              <div>
                <input
                  type="number"
                  className="input w-24"
                  placeholder="Minimum"
                  name="min"
                />
              </div>
              <div>
                <input
                  type="number"
                  className="input w-24"
                  placeholder="Maximum"
                  name="max"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="input w-24"
                  placeholder="Currency"
                  name="currency"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="fieldset-legend">Job Description</label>
            <textarea className="textarea w-full" name="description" placeholder="Job Description"></textarea>
          </div>
          <div>
            <label className="fieldset-legend">Company</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Company Name"
              name="company"
            />
          </div>
          <div>
            <label className="fieldset-legend">Job Requirements</label>
            <textarea className="textarea w-full" name="requirements" placeholder="Job Requirements (seperate by comma- e.g- C++, Pyhton)"></textarea>
          </div>
          <div>
            <label className="fieldset-legend">Responsibilities</label>
            <textarea className="textarea w-full" name="responsibilities" placeholder="Job Responsibilities (seperate by comma- e.g- C++, Pyhton)"></textarea>
          </div>
          <div>
            <label className="fieldset-legend">HR Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="HR Name"
              defaultValue={user.displayName}
              name="hr_name"
            />
          </div>
          <div>
            <label className="fieldset-legend">HR Email</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={user.email}
              placeholder="HR Email"
              name="hr_email"
            />
          </div>
          <div>
            <label className="fieldset-legend">Company Logo</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Company Logo URL"
              name="company_logo"
            />
          </div>
        </div>
        <div className="flex justify-center py-5">
            <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
