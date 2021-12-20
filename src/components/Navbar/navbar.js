import "./navbar.css";
import avatar from "../../assets/avatar-svgrepo-com.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fas fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <img width="30" src={avatar} alt="avatar" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              {" "}
              <i class="fas fa-user"></i>
             <Link to="register">   Add Admin </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
