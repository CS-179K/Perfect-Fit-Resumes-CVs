import React, { useState } from 'react';

function Control() 
{
  // State to hold selected options and job description
  const [documentType, setDocumentType] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  //Handle the dropdown menu
  const handleDropdownChange = (event) => 
  {
    setDocumentType(event.target.value);
  };

  //Updating dialogue box for JD
  const handleTextAreaChange = (event) => 
  {
    setJobDescription(event.target.value);
  };

  //Submitting the form
  const handleSubmit = (event) => 
  {
    event.preventDefault();
    console.log('Selected Document:', documentType);
    console.log('Job Description:', jobDescription);
  };

  return 
  (
    <div className="container">
      <h1>Job Application Helper</h1>
      <form onSubmit={handleSubmit}>
        {/*Specify document type */}
        <select value={documentType} onChange={handleDropdownChange} className="dropdown">
          <option value="" disabled>Select Document Type</option>
          <option value="Resume">Resume</option>
          <option value="CV">CV</option>
        </select>

        {/*Job Description*/}
        <textarea
          value={jobDescription}
          onChange={handleTextAreaChange}
          className="dialogue-box"
          placeholder="Enter Job Description Here..."
        />

        {/*Submit button*/}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Control;
