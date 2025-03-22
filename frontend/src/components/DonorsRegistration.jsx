import { useState } from "react";

function DonorRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    location: "",
    bloodGroup: "",
    medicalHistory: "",
    medications: "",
    lastDonation: "",
    preferredDonationType: "",
    availability: "",
    consent: false,
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donor Registration Submitted:", formData);
    alert("Thank you for registering as a blood donor!");
    // Reset form after submission
    setFormData({
      name: "",
      age: "",
      gender: "",
      contact: "",
      email: "",
      location: "",
      bloodGroup: "",
      medicalHistory: "",
      medications: "",
      lastDonation: "",
      preferredDonationType: "",
      availability: "",
      consent: false,
      privacyPolicy: false,
    });
  };

  return (
    <div className="donor-registration">
      <h2>🩸 Register as a Blood Donor</h2>
      <form onSubmit={handleSubmit} className="donor-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Address/Location" value={formData.location} onChange={handleChange} required />
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
        <textarea name="medicalHistory" placeholder="Medical History" value={formData.medicalHistory} onChange={handleChange} required />
        <input type="text" name="medications" placeholder="Current Medications" value={formData.medications} onChange={handleChange} />
        <input type="date" name="lastDonation" value={formData.lastDonation} onChange={handleChange} required />
        <select name="preferredDonationType" value={formData.preferredDonationType} onChange={handleChange} required>
          <option value="">Preferred Donation Type</option>
          <option value="Whole Blood">Whole Blood</option>
          <option value="Plasma">Plasma</option>
          <option value="Platelets">Platelets</option>
        </select>
        <textarea name="availability" placeholder="Preferred Donation Times" value={formData.availability} onChange={handleChange} />
        <label>
          <input type="checkbox" name="consent" checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} required />
          I consent to donate blood.
        </label>
        <label>
          <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={(e) => setFormData({ ...formData, privacyPolicy: e.target.checked })} required />
          I agree to the privacy policy.
        </label>
        <button type="submit">Register as Donor</button>
      </form>
    </div>
  );
}

export default DonorRegistration;
 