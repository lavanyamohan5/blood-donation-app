import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/donors">Donors</Link>
            <Link to="/requests">Requests</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
}

export default Navbar;
