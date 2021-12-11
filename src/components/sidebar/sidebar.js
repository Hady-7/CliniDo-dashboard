import "./sidebar.css";
import logo from "../../assets/avatar-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import firebase from "../../fbconifq/fbAuth";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("token");
        console.log("signed out");
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1 style={{ marginLeft: "5px" }}>
            {" "}
            <span id="span">Clini</span>Do
          </h1>
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
          <Link to="dashboard">Dashboard</Link>
        </div>
        <h2>MNG</h2>
        <ProSidebar style={{ marginTop: "15px" }}>
          <Menu iconShape="square">
            <SubMenu
              title="Doctor managment"
              icon={<i class="fa fa-user-md" aria-hidden="true"></i>}
            >
              <MenuItem>
                Doctor List
                <Link to="doctor-list" />
              </MenuItem>
              <MenuItem>
                Add doctor
                <Link to="add-doctor" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
        <ProSidebar style={{ marginTop: "15px" }}>
          <Menu iconShape="square">
            <SubMenu
              title="User managment"
              icon={<i class="fa fa-hospital-user" aria-hidden="true"></i>}
            >
              <MenuItem>
                User List
                <Link to="user-list" />
              </MenuItem>
              <MenuItem>
                Add user
                <Link to="add-user" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>

        <div className="sidebar__logout">
          <i className="fas fa-power-off"></i>
          <a
            onClick={() => {
              handleLogout();
            }}
          >
            Log out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
