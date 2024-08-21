import React, { useState } from 'react';
import './ResumePage.css';

function ResumePage() {
  // State variables for the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [skills, setSkills] = useState('');

  // Handle input changes
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handleUniversityChange = (event) => setUniversity(event.target.value);
  const handleMajorChange = (event) => setMajor(event.target.value);
  const handleWorkExperienceChange = (event) => setWorkExperience(event.target.value);
  const handleSkillsChange = (event) => setSkills(event.target.value);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
    console.log('University:', university);
    console.log('Major:', major);
    console.log('Work Experience:', workExperience);
    console.log('Skills:', skills);
    // You can add further logic to process or store the information
  };

  return (
    <div className="container">
      <div className="Resume">
      <h1 className="resume-header">Create Your Resume</h1>
        <form onSubmit={handleSubmit} className="resume-form">
          <div className="column">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={handleNameChange} 
                placeholder="Enter your name" 
                className="input-field" 
              />
            </div>

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
          </div>

          <div className="column textarea-column">
            <div className="form-group">
              <label htmlFor="workExperience">Work Experience:</label>
              <textarea 
                id="workExperience" 
                value={workExperience} 
                onChange={handleWorkExperienceChange} 
                placeholder="Describe your work experience" 
                className="input-box" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="skills">Skills:</label>
              <textarea 
                id="skills" 
                value={skills} 
                onChange={handleSkillsChange} 
                placeholder="List your skills" 
                className="input-box" 
              />
            </div>
          </div>

          <div className="form-group" style={{ width: '100%' }}>
            <button type="submit" className="submitButton">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumePage;
