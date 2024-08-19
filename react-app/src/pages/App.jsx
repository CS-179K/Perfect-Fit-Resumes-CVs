import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFileType, setSelectedFileType] = useState('');
  const [file, setFile] = useState(null);

  const handleDropdownChange = (event) => {
    setSelectedFileType(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="App">
      {/* Existing Elements */}
      <div className="projectTitle">
        <h1>Job Description</h1>
        <p>Here is the description of the job...</p>
      </div>

      <div className="dropdown">
        <select onChange={handleDropdownChange}>
          <option value="">Select a file type</option>
          <option value="resume">Resume</option>
          <option value="cv">CV</option>
        </select>
      </div>

      {selectedFileType && (
        <div className="file-upload">
          <p>Please upload your {selectedFileType}:</p>
          <input type="file" onChange={handleFileChange} />
          <button className="submitButton" type="submit" onClick={handleSubmit}>
            Upload
          </button>
        </div>
      )}

      {/* Existing Dialogue Box or Other Elements */}
      <div className="dialogue-box">
        <h2>Dialogue Box</h2>
        <p>This is where the dialogue or other content goes...</p>
      </div>
    </div>
  );
}

export default App;
