import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthCOntext";
import { toast } from "react-toastify";

const Register = () => {
    const {registerWithEmail} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log( name, photoUrl,email, password);
        registerWithEmail(email, password)
        .then(() => {
            toast.success("Registartion Successful!")
        })
        .catch((err) => {
            toast.error(err.message)
        })
    }
  return (
    <div className="py-5 flex flex-col items-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-gray-600">
            Register to access all content.
          </p>
        </div>
        <form onSubmit={handleRegister} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
              <label htmlFor="photoUrl" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                id="photoUrl"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="cursor-pointer w-full px-8 py-3 font-semibold rounded-md bg-sky-600 text-gray-50"
              >
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Already have an account yet?
              <Link to={"/login"} className="hover:underline text-sky-600">
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
