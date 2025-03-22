import React, { useState, useEffect } from "react";

function NearbyDonors({ bloodGroupRequested }) {
  const [donors, setDonors] = useState([]);

  // Simulating API request for nearby donors
  useEffect(() => {
    // Example donor data based on blood group requested
    const fetchedDonors = [
      { id: 1, name: "John Doe", bloodGroup: "A+", location: "Chennai", contact: "9876543210" },
      { id: 2, name: "Jane Smith", bloodGroup: "A+", location: "Madurai", contact: "9123456789" },
      { id: 3, name: "Mike Johnson", bloodGroup: "O+", location: "Coimbatore", contact: "9345678901" },
    ];

    // Filter donors based on requested blood group
    const filteredDonors = fetchedDonors.filter(
      (donor) => donor.bloodGroup === bloodGroupRequested
    );

    setDonors(filteredDonors);
  }, [bloodGroupRequested]);

  return (
    <div className="donors-container">
      <h3>📍 Nearby Donors</h3>
      {donors.length === 0 ? (
        <p>No donors found for {bloodGroupRequested} blood group near you.</p>
      ) : (
        donors.map((donor) => (
          <div className="donor-card" key={donor.id}>
            <p><strong>{donor.name}</strong></p>
            <p>{donor.location}</p>
            <button onClick={() => alert(`Contacting ${donor.name}`)}>Contact Donor</button>
          </div>
        ))
      )}
    </div>
  );
}

export default NearbyDonors;
