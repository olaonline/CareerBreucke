import "../App.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/job">Jobs</Link>
          </li>
          <li>
            <Link to="/add-job">Add a Job</Link>
          </li>
          {/* <li><Link to="/">Events</Link></li> */}
          <li>|</li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button className="button">
              <Link to="/login">Login</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
