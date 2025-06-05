import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthCOntext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const LogIn = () => {
    const {signInwithGoogle, emailLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const googleSignIn = () => {
        signInwithGoogle()
        .then(() => {
            toast.success("Google log in successful!")
        })
        .catch((err) => {
            toast.error(err.message);
        })
    }

    const handleLogIn = (e) => {
      e.preventDefault();
      const email  = e.target.email.value;
      const password  = e.target.password.value;
      emailLogIn(email, password)
      .then(() => {
        toast.success("Log In Successful");
        navigate("/")
      })
      .catch((err) => {
        toast.error(err.message)
      })
    }
    return (
    <div className="py-5 flex justify-center items-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleLogIn} className="space-y-12">
          <div className="space-y-4">
            <div>
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
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="btn w-full px-8 py-3 font-semibold rounded-md bg-sky-600 text-gray-50"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Don't have an account yet?
              <Link
                to={"/register"}
                className="hover:underline text-sky-600"
              >
                Register
              </Link>
              .
            </p>
          </div>
        </form>
        {/* Google Button */}
        <div className="py-5">
          <button onClick={googleSignIn} className="btn w-full bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
