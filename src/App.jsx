import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
