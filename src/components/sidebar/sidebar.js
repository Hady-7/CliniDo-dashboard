import "./sidebar.css";
import logo from "../../assets/avatar-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1 style={{ marginLeft : "5px"}}> Clinido</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fas fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link">
          <i className="fas fa-home"></i>
          <Link to="/">Dashboard</Link>
        </div>
        <h2>MNG</h2>
       
        <div className="sidebar__link">
          <i className="fas fa-user-secret"></i>
          <Link to="/doctor">Doctors Management</Link>

        </div>
        <div className="sidebar__link">
          <i className="fas fa-user-secret"></i>
          <Link to="/user">Users Management</Link>
        </div>
        <div className="sidebar__logout">
          <i className="fas fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;