import React, { useState, useEffect } from "react";

function Donors() {
    // Simulate fetching donor count from an API
    const [donorCount, setDonorCount] = useState(5000);

    useEffect(() => {
        // Simulate fetching updated data (replace with API call)
        setTimeout(() => {
            setDonorCount(5025); // Example updated count
        }, 2000);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-red-600">🩸 Donor Statistics</h1>
            <p className="text-lg text-gray-700 mt-4">Total Donors Registered:</p>
            <div className="text-6xl font-bold text-blue-600 mt-4">{donorCount}+</div>
            <p className="mt-6 text-gray-500">This data updates regularly.</p>
        </div>
    );
}

export default Donors;
