import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
  // State variables for the form fields
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');
  const [university, setUniversity] = useState('');

  // Handle input changes
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handleMajorChange = (event) => setMajor(event.target.value);
  const handleUniversityChange = (event) => setUniversity(event.target.value);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Age:', age);
    console.log('Major:', major);
    console.log('University:', university);
    // You can add further logic to process or store the information
  };

  return (
    <div className="Profile">
      <h1>Profile Information</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        {/* First Name Field */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            value={firstName} 
            onChange={handleFirstNameChange} 
            placeholder="Enter your first name" 
            className="input-field" 
          />
        </div>

        {/* Last Name Field */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            value={lastName} 
            onChange={handleLastNameChange} 
            placeholder="Enter your last name" 
            className="input-field" 
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Enter your email" 
            className="input-field" 
          />
        </div>

        {/* Major Field */}
        <div className="form-group">
          <label htmlFor="major">Major:</label>
          <input 
            type="text" 
            id="major" 
            value={major} 
            onChange={handleMajorChange} 
            placeholder="Enter your major" 
            className="input-field" 
          />
        </div>

        {/* University Field */}
        <div className="form-group">
          <label htmlFor="university">University:</label>
          <input 
            type="text" 
            id="university" 
            value={university} 
            onChange={handleUniversityChange} 
            placeholder="Enter your university" 
            className="input-field" 
          />
        </div>

        {/* Address Field */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input 
            type="text" 
            id="address" 
            value={address} 
            onChange={handleAddressChange} 
            placeholder="Enter your address" 
            className="input-field" 
          />
        </div>

        {/* Phone Number Field */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            value={phoneNumber} 
            onChange={handlePhoneNumberChange} 
            placeholder="Enter your phone number" 
            className="input-field" 
          />
        </div>


        <div className="form-group">
            <button type="submit" className="submitButton">Submit</button>
        </div>
      </form>
    </div>
    
    
  );
}

export default ProfilePage;
