import { useState } from "react";

function BloodRequest() {
    const [requestData, setRequestData] = useState({
        patientName: "",
        bloodGroup: "",
        hospital: "",
        location: "",
        contact: "",
    });

    const handleChange = (e) => {
        setRequestData({ ...requestData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Blood Request Submitted:", requestData);
        alert("Blood Request Submitted Successfully!");
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Request Blood</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="patientName" placeholder="Patient Name" className="input-field" onChange={handleChange} required />
                <select name="bloodGroup" className="input-field" onChange={handleChange} required>
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
                <input type="text" name="hospital" placeholder="Hospital Name" className="input-field" onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" className="input-field" onChange={handleChange} required />
                <input type="text" name="contact" placeholder="Contact Number" className="input-field" onChange={handleChange} required />
                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-lg w-full">Submit Request</button>
            </form>
        </div>
    );
}

export default BloodRequest;
