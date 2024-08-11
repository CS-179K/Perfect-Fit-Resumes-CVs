import { useState } from 'react'
import './App.css'

function App() {
  // State to hold selected options and job description
  const [documentType, setDocumentType] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  
  // New state for file upload functionality
  const [file, setFile] = useState(null);

  // Handle the dropdown menu
  const handleDropdownChange = (event) => {
    setDocumentType(event.target.value);
  };

  // Updating dialogue box for JD
  const handleTextAreaChange = (event) => {
    setJobDescription(event.target.value);
  };

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Document:', documentType);
    console.log('Job Description:', jobDescription);

    // Handle file upload if a file is selected
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('File uploaded successfully:', data);
        })
        .catch((error) => {
          console.error('File upload error:', error);
        });
    } else {
      console.log('No file selected');
    }
  };

  const handleClick = (selectedData) => {
    setSelectedData(selectedData);
    setShow(true);
  };

  return (
    <div className="container">
      <div className='projectTitle'>
        <h1>Job Application Helper</h1>
      </div>
      <form onSubmit={handleSubmit} className='container'>
        {/* Specify document type */}
        <select value={documentType} onChange={handleDropdownChange} className="dropdown">
          <option value="" disabled>Select Document Type</option>
          <option value="Resume" onClick={() => clickResume(row)}>Resume</option>
          <option value="CV">CV</option>
        </select>

        {/* Job Description */}
        <textarea
          value={jobDescription}
          onChange={handleTextAreaChange}
          className="dialogue-box"
          placeholder="Enter Job Description Here..."
        />

        {/* New: File Upload Section */}
        {documentType && (
          <div className="file-upload">
            <p>Please upload your {documentType}:</p>
            <input type="file" onChange={handleFileChange} />
          </div>
        )}

        {/* Submit button */}
        <button type="submit" className='submitButton'>Submit</button>
      </form>
    </div>
  );
}

export default App;
