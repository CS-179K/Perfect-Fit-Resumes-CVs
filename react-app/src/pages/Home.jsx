import './Home.css'
import React, { useState } from 'react'
import axios from 'axios'
// import { PDFDocument } from 'pdf-lib'; // For creating PDF
import pdfToText from 'react-pdftotext' // Parsing PDF

function Home({ infoFilled }) {
  // State to hold selected options, job description, and current step, etc
  const [documentType, setDocumentType] = useState('Resume');
  const [personDescription, setPersonDescription] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [doneGenerating, setDoneGenerating] = useState(false);
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
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

      axios.post("http://localhost:5000/api/main", {
        documentType: documentType,
        personDescription: personDescription,
        jobDescription: jobDescription
      }).then(response => {
        // console.log(response.data.prompt, response.data.message, response.data.result);
        setResult(response.data.result); // Store the server response from POST request
        setDoneGenerating(true);
        setStep(4);  // Move to the final step
      }).catch(error => {
        console.error('There was an error submitting the data!', error);
      });
      // setStep(4);
    } else if (step === 4) {
      // Done
    }
  };

  // // Handle GET request
  // const handleGetRequest = async () => {
  //   try {
  //     // Make GET request to retrieve the result
  //     const getResponse = await axios.get("http://localhost:5000/api/main");
  //     console.log(getResponse.data.result);  // Log the retrieved result
  //     setResult(getResponse.data.result);  // Set the result in state
  //     setStep(4);  // Move to the next step
  //   } catch (error) {
  //     console.error('There was an error with the GET request!', error);
  //   }
  // };

  // Handle the arrow button click
  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      setStep(prevStep => Math.min(prevStep + 1, doneGenerating ? 4 : 3)); // Move to the next step, but not above 4
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

  // Handle file import
  const handleFileChange = async (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      const file = event.target.files[0]
      pdfToText(file)
        // .then(text => console.log(text))
        .then(text => setPersonDescription(text))
        .catch(error => console.error("Failed to extract text from pdf"))

      setFile(uploadedFile);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const pdfExport = async () => {
    const pdfDoc = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const fontSize = 12


  }

  return (
    <div className="Test">
      {/* <div id='header'>
        <div className="headerText">Perfect Fit Resumes and Cover Letters</div>
        <img src={pfp} alt="Profile Picture" className="pfp" />
      </div> */}
      <div id='mainBody'>
        <div id='centerThing'>
          <div id='stepsThing'>
            {step} &rarr;
          </div>
          <div id='centerCenterTop'>
            {step === 1 && "Let's get started! How can we help you today?"}
            {step === 2 && "Paste your resume/CV or cover letter in the textbox!"}
            {step === 3 && "Paste the job description below in the textbox!"}
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
              <>
                <textarea
                  value={personDescription}
                  onChange={handlePersonInputChange}
                  placeholder='Enter your resume/cv or cover letter here... '
                  className='inputBox'
                />
              </>
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
          {(step === 2) && (
            <div className="file-upload">
              <input
                type="file"
                id="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <label htmlFor="file" className="custom-file-upload">
                &#x1F4CE;
              </label>
              {file && <p className='fileUploadName'>{file.name}</p>}
            </div>
          )}
          {(step === 4 && infoFilled) && (
            <div className="file-download">
              {/* <input
                type="file"
                id="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              /> */}
              <button id='fileExportButton' onClick={() => pdfExport()}> Export </button>
              <label htmlFor="file" className="custom-file-upload">
                &#x1F4CE;
              </label>
              {file && <p className='fileUploadName'>{file.name}</p>}
            </div>
          )}
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

export default Home