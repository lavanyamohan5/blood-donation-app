import { useState } from "react";

function BloodRequest() {
    // State for form inputs
    const [formData, setFormData] = useState({
        name: "",
        bloodGroup: "",
        location: "",
        contact: "",
        urgency: "Normal"
    });

    // State for nearby donors (mock data for now)
    const [nearbyDonors, setNearbyDonors] = useState([
        { name: "John Doe", bloodGroup: "A+", location: "Chennai", contact: "+91 9876543210" },
        { name: "Jane Smith", bloodGroup: "A+", location: "Chennai", contact: "+91 9876543211" },
        { name: "Sam Brown", bloodGroup: "O+", location: "Chennai", contact: "+91 9876543212" }
    ]);

    // State for donation history
    const [donationHistory, setDonationHistory] = useState([]);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Update donation history with the current donation request
        const newDonation = {
            name: formData.name,
            bloodGroup: formData.bloodGroup,
            location: formData.location,
            contact: formData.contact,
            urgency: formData.urgency,
            date: new Date().toLocaleDateString(),
        };

        setDonationHistory([newDonation, ...donationHistory]);

        console.log("Blood Request Submitted:", formData);
        alert("Blood request submitted successfully!");

        // Clear the form after submission
        setFormData({ name: "", bloodGroup: "", location: "", contact: "", urgency: "Normal" });
    };

    return (
        <div className="request-container">
            <h2>🩸 Request Blood</h2>
            <p>Fill out the form below to request blood donation.</p>

            {/* Blood Request Form */}
            <form onSubmit={handleSubmit} className="request-form">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />

                <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>

                <input 
                    type="text" 
                    name="location" 
                    placeholder="Your Location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    required 
                />

                <input 
                    type="tel" 
                    name="contact" 
                    placeholder="Contact Number" 
                    value={formData.contact} 
                    onChange={handleChange} 
                    required 
                />

                <select name="urgency" value={formData.urgency} onChange={handleChange}>
                    <option value="Normal">Normal</option>
                    <option value="Emergency">Emergency</option>
                </select>

                <button type="submit" className="btn-submit">Request Blood</button>
            </form>

            {/* Nearby Donors Section */}
            {formData.bloodGroup && (
                <div className="donors-section">
                    <h3>Nearby Donors for {formData.bloodGroup} Blood</h3>
                    <ul>
                        {nearbyDonors
                            .filter(donor => donor.bloodGroup === formData.bloodGroup)
                            .map((donor, index) => (
                                <li key={index}>
                                    <p>Name: {donor.name}</p>
                                    <p>Location: {donor.location}</p>
                                    <p>Contact: {donor.contact}</p>
                                    <button>Contact Donor</button>
                                </li>
                            ))}
                    </ul>
                </div>
            )}

            {/* Donation History Section */}
            {donationHistory.length > 0 && (
                <div className="donation-history">
                    <h3>Your Donation History</h3>
                    <ul>
                        {donationHistory.map((donation, index) => (
                            <li key={index}>
                                <p><strong>Date:</strong> {donation.date}</p>
                                <p><strong>Name:</strong> {donation.name}</p>
                                <p><strong>Blood Group:</strong> {donation.bloodGroup}</p>
                                <p><strong>Location:</strong> {donation.location}</p>
                                <p><strong>Contact:</strong> {donation.contact}</p>
                                <p><strong>Urgency:</strong> {donation.urgency}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Emergency Alerts Section */}
            <div className="emergency-alerts">
                <h3>⚠️ Emergency Alerts</h3>
                <p>Check for urgent requests from nearby hospitals.</p>
                <ul>
                    <li>
                        <p><strong>Hospital:</strong> ABC Hospital</p>
                        <p><strong>Blood Group Needed:</strong> A+</p>
                        <p><strong>Urgency:</strong> Emergency</p>
                        <button>Donate Now</button>
                    </li>
                    <li>
                        <p><strong>Hospital:</strong> XYZ Hospital</p>
                        <p><strong>Blood Group Needed:</strong> O+</p>
                        <p><strong>Urgency:</strong> Emergency</p>
                        <button>Donate Now</button>
                    </li>
                </ul>
            </div>

            {/* Contact Information Section */}
            <div className="contact-info">
                <h3>📞 Contact Information</h3>
                <p>If you need support, feel free to reach us at:</p>
                <p><strong>Helpline Number:</strong> +91 1234567890</p>
                <p><strong>Email:</strong> support@blooddonation.org</p>
            </div>
        </div>
    );
}

export default BloodRequest;
