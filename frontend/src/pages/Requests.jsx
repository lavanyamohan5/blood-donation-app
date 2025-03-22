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

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Blood Request Submitted:", formData);
        alert("Blood request submitted successfully!");
        setFormData({ name: "", bloodGroup: "", location: "", contact: "", urgency: "Normal" });
    };

    return (
        <div className="request-container">
            <h2>🩸 Request Blood</h2>
            <p>Fill out the form below to request blood donation.</p>

            <form onSubmit={handleSubmit}>
                {/* Name */}
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />

                {/* Blood Group Selection */}
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

                {/* Location */}
                <input 
                    type="text" 
                    name="location" 
                    placeholder="Your Location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    required 
                />

                {/* Contact Number */}
                <input 
                    type="tel" 
                    name="contact" 
                    placeholder="Contact Number" 
                    value={formData.contact} 
                    onChange={handleChange} 
                    required 
                />

                {/* Urgency Level */}
                <select name="urgency" value={formData.urgency} onChange={handleChange}>
                    <option value="Normal">Normal</option>
                    <option value="Emergency">Emergency</option>
                </select>

                {/* Submit Button */}
                <button type="submit" className="btn-submit">Request Blood</button>
            </form>
        </div>
    );
}

export default BloodRequest;
