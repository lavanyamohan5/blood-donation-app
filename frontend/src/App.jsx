import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import Donors from "./pages/Donors";
import Requests from "./pages/Requests";
import RegisterDonor from "./pages/RegisterDonor";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                {/* Show Login Page First */}
                <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

                {/* After Login, Redirect to Main Page */}
                {isLoggedIn ? (
                    <Route path="/main" element={<MainPage />} />
                ) : (
                    <Route path="*" element={<Navigate to="/" />} />
                )}

                {/* Routes for Dashboard Pages */}
                <Route path="/home" element={<Home />} />
                <Route path="/donors" element={<Donors />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/register" element={<RegisterDonor />} />
            </Routes>
        </Router>
    );
}

export default App;
