import '../App.css';
import logo from '../img/logo.png'

function Header() {
  return (
    <div className="Header">
        <nav>
        <img src={logo} />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Job Search</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Events</a></li>
            <li>|</li>
            <li><a href="#">Register</a></li>
            <li><button>Login</button></li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;