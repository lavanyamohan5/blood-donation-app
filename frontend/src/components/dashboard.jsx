import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Donors from "../pages/Donors";
import Requests from "../pages/Requests";

function Dashboard() {
    return (
        <div className="flex">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-gray-900 text-white h-screen p-5">
                <h1 className="text-2xl font-bold text-red-500">🩸 LifeBlood</h1>
                <p className="text-sm italic text-gray-400 mt-1">
                    "Your donation today, someone’s heartbeat tomorrow!"
                </p>
                <nav className="mt-6 flex flex-col space-y-4">
                    <Link to="/" className="hover:text-red-400">🏠 Dashboard</Link>
                    <Link to="/home" className="hover:text-red-400">🏠 Home</Link>
                    <Link to="/donors" className="hover:text-red-400">🩸 Donors</Link>
                    <Link to="/requests" className="hover:text-red-400">📌 Requests</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <Routes>
                    {/* Default Dashboard Content */}
                    <Route path="/" element={
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800">Why Blood Donation Matters?</h2>
                            <p className="text-gray-600 mt-2">
                                Every <strong>2 seconds</strong>, someone in the world needs blood. A single donation can 
                                <strong> save up to 3 lives</strong> and help those facing **accidents, surgeries, anemia, and more**. 
                                Your small act can make a <strong>big difference</strong>!
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mt-4">How LifeBlood Helps?</h3>
                            <p className="text-gray-600">
                                LifeBlood connects donors with those in urgent need. Our mission is to 
                                <strong> bridge the gap between donors and recipients</strong>, ensuring safe, fast, and efficient blood donation services.
                            </p>
                        </div>
                    } />

                    {/* Other Routes */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/donors" element={<Donors />} />
                    <Route path="/requests" element={<Requests />} />
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;
