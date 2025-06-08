import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Loader from "../Components/Loader/Loader";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/AddJob/AddJob";
import MyJobs from "../Pages/MyJobs/MyJobs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ApplyJob from "../Pages/ApplyJob/ApplyJob";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"/details/:id",
        loader: ({params}) => fetch(`http://localhost:4000/jobs/${params.id}`),
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        HydrateFallback: Loader
      },
      {
        path: "/login",
        Component: LogIn
      },
      {
        path:"/register",
        Component: Register
      },
      {
        path: "/addjob",
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "/myjobs",
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path: "/applyjob/:id",
        element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>
      }
    ],
  },
]);
