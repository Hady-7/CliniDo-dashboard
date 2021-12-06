import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main"
import Doctor from "./components/doctor/doctor"
import DoctorList from "./components/doctor/doctor-list/doctorList"
import AddDoctor from "./components/doctor/add-doctor/addDoctor"
import User from "./components/users/user"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">

      <Router>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Routes>
      <Route exact  path="/" element={<Main />} />
      <Route exact  path="doctor" element={<Doctor />} />
      <Route exact  path="doctor-list" element={<DoctorList />} />
      <Route exact  path="add-doctor" element={<AddDoctor />} />
      <Route exact  path="user" element={<User />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </Router>

    </div>
  );
}

export default App;
