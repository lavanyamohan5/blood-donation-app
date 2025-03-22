import { useState } from "react";

function RegisterDonor() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        bloodGroup: "",
        location: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Donor Registered:", formData);
        alert("Registration Successful!");
    };

    return (
        <div className="container">
            <h2>Register as a Donor</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" className="input-field" onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" className="input-field" onChange={handleChange} required />
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
                <input type="text" name="location" placeholder="Location" className="input-field" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone Number" className="input-field" onChange={handleChange} required />
                <button type="submit" className="btn">Register</button>
            </form>
        </div>
    );
}

export default RegisterDonor;
