import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import DoctorList from "./components/doctor/doctor-list/doctorList";
import AddDoctor from "./components/doctor/add-doctor/addDoctor";
import EditDoctor from "./components/doctor/edit-doctor/editDoctor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/users/userList/userList";

import Login from "./Auth/login/login";
import Reg from "./Auth/Reg/reg";
import { ProtectedRoute } from "./components/guard/protectedRoute";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  return (
    <div className="container1">
      <Router>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Routes>
          <Route exact path="/" element={<Login />} />
          {!localStorage.getItem("token") ? (
            <Route path="dashboard" element={ProtectedRoute} isAuth={isAuth}>
              <Route exact path="dashboard" element={<Main />} />
              <Route exact path="doctor-list" element={<DoctorList />} />
              <Route exact path="register" element={<Reg />} />
              <Route exact path="add-doctor" element={<AddDoctor />} />
              <Route exact path="edit-doctor/:id" element={<EditDoctor />} />
              <Route exact path="user-list" element={<UserList />} />
            </Route>
          ) : (
            <>
              <Route exact path="dashboard" element={<Main />} />
              <Route exact path="register" element={<Reg />} />
              <Route exact path="doctor-list" element={<DoctorList />} />
              <Route exact path="add-doctor" element={<AddDoctor />} />
              <Route exact path="edit-doctor/:id" element={<EditDoctor />} />
              <Route exact path="user-list" element={<UserList />} />
            </>
          )}

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
