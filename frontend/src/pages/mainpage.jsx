import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Donors from "./Donors";
import Requests from "./Requests";
import RegisterDonor from "./RegisterDonor";

function MainPage() {
    return (
        <div className="container-fluid d-flex vh-100">
            {/* Left Side: Dashboard */}
            <aside className="bg-dark text-white p-4 d-flex flex-column" style={{ width: "250px" }}>
                <h2 className="h4">Dashboard</h2>
                <nav className="nav flex-column">
                    <Link to="/home" className="nav-link text-light">🏠 Home</Link>
                    <Link to="/donors" className="nav-link text-light">🩸 Donors</Link>
                    <Link to="/requests" className="nav-link text-light">📌 Requests</Link>
                    <Link to="/register" className="nav-link text-light">📝 Register as Donor</Link>
                </nav>
            </aside>

            {/* Right Side: Content */}
            <div className="flex-grow-1 p-5 bg-light">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/donors" element={<Donors />} />
                    <Route path="/requests" element={<Requests />} />
                    <Route path="/register" element={<RegisterDonor />} />
                </Routes>
            </div>
        </div>
    );
}

export default MainPage;
