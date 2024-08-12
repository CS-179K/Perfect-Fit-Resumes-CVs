import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State to hold selected options and job description
  const [documentType, setDocumentType] = useState('')
  const [jobDescription, setJobDescription] = useState('')

  //Handle the dropdown menu
  const handleDropdownChange = (event) => {
    setDocumentType(event.target.value);
  };

  //Updating dialogue box for JD
  const handleTextAreaChange = (event) => {
    setJobDescription(event.target.value);
  };

  //Submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Document:', documentType);
    console.log('Job Description:', jobDescription);
  };

  const handleClick = (selectedData) => {
    setSelectedData(selectedData);
    setShow(true);
  }

  return (
    <div className="App">
      <h1 className='projectTitle'>Job Application Helper</h1>
      <form onSubmit={handleSubmit} className='container'>
        {/*Specify document type */}
        <select value={documentType} onChange={handleDropdownChange} className="dropdown">
          <option value="" disabled>Select Document Type</option>
          <option value="Resume" onClick={() => clickResume(row)}>Resume</option>
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

        <button type="submit" className='submitButton'>Submit</button>
      </form>
    </div>
  );
}

export default App
