// import { useState } from 'react'
import './test.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Testt() {
  // State to hold selected options, job description, and current step
  const [documentType, setDocumentType] = useState('Resume'); // Track to create resume or cover letter
  const [personDescription, setPersonDescription] = useState(''); // Track the resume or cover letter info
  const [jobDescription, setJobDescription] = useState(''); // Track the job description
  const [step, setStep] = useState(1); // Track the current step

  const [result, setResult] = useState(0);

  // Handle the dropdown menu
  const handleDropdownChange = (event) => {
    setDocumentType(event.target.value);
  };

  // Handle the OK button click
  const handleOkClick = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // console.log(documentType, personDescription, jobDescription);

      axios.post("http://localhost:5000/api/users", {
        documentType: documentType,
        personDescription: personDescription,
        jobDescription: jobDescription
      }).then(response => {
        console.log(response.data.message, response.data.result);
        // console.log(response.data.result);
        setResult(response.data.result); // Store the server response from POST request
        setStep(4);  // Move to the final step
      }).catch(error => {
        console.error('There was an error submitting the data!', error);
      });
      // setStep(4);
    } else if (step === 4) {
      // Done
    }
  };

  // const handleGetRequest = async () => {
  //   try {
  //     // Make GET request to retrieve the result
  //     const getResponse = await axios.get("http://localhost:5000/api/users");
  //     console.log(getResponse.data.result);  // Log the retrieved result
  //     setResult(getResponse.data.result);  // Set the result in state
  //     setStep(4);  // Move to the next step
  //   } catch (error) {
  //     console.error('There was an error with the GET request!', error);
  //   }
  // };

  // const handleOk3 = async () => {
  //   // e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/users", {
  //       documentType: documentType,
  //       personDescription: personDescription,
  //       jobDescription: jobDescription
  //     });
  //     // console.log(documentType, personDescription, jobDescription);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  // Handle the arrow button click
  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      setStep(prevStep => Math.min(prevStep + 1, 4)); // Move to the next step, but not above 4
    } else if (direction === 'previous') {
      setStep(prevStep => Math.max(prevStep - 1, 1)); // Move to the previous step, but not below 1
    }
  };

  // Handle the input change for job description
  const handlePersonInputChange = (event) => {
    setPersonDescription(event.target.value);
  };

  // Handle the input change for job description
  const handleJobInputChange = (event) => {
    setJobDescription(event.target.value);
  };

  return (
    <div className="Test">
      <div id='header'>
        Perfect Fit Resumes and Cover Letters
      </div>
      <div id='mainBody'>
        <div id='centerThing'>
          {/* Test */}
          <div id='stepsThing'>
            {step} &rarr;
          </div>
          <div id='centerCenterTop'>
            {step === 1 && "Let's get started! How can we help you today?"}
            {step === 2 && "Paste your resume/CV or cover letter in the textbox below!"}
            {step === 3 && "Paste the job description below in the textbox below!"}
            {step === 4 && "Here is your adjusted " + documentType + " for your job!"}
          </div>
          <div id='centerCenterCenter'>
            {step === 1 ? (
              <>
                <select className='dropdown' value={documentType} onChange={handleDropdownChange}>
                  <option value="resume">Create a Resume</option>
                  <option value="cover letter">Create a Cover Letter</option>
                </select>
              </>
            ) : step === 2 ? (
              <textarea
                value={personDescription}
                onChange={handlePersonInputChange}
                placeholder='Enter your resume/cv or cover letter here... '
                className='inputBox'
              />
            ) : step === 3 ? (
              <textarea
                value={jobDescription}
                onChange={handleJobInputChange}
                placeholder='Enter your job description or job position link here...'
                className='inputBox'
              />
            ) : (
              <div className='resultBox'>
                {result
                  .trim() 
                  .split('\n')
                  .map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
              </div>
            )}
          </div>
          <div id='centerCenterBot'>
            <button type='button' className='OKbutton' onClick={handleOkClick}>OK</button>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div id='buttonContainer'>
          <button type='button' className='arrowButton' onClick={() => handleArrowClick('previous')}>&larr;</button>
          <button type='button' className='arrowButton' onClick={() => handleArrowClick('next')}>&rarr;</button>
        </div>
      </div>

    </div>
  );
}

export default Testt