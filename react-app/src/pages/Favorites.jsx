import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Favorites.css';

function Favorites({ userID }) {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    if (userID) {
      axios.get('http://localhost:5000/api/favorites', { params: { id: userID } })
        .then(response => {
          setDocuments(response.data.documents);
          setLoading(false);
        })
        .catch(error => {
          setError('Error fetching document favorites');
          setLoading(false);
        });
    }
  }, [userID]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleViewClick = (doc) => {
    setSelectedDocument(doc);
  };

  const handleClosePopup = () => {
    setSelectedDocument(null);
  };

  const handleDelete = (doc) => {
    axios.delete("http://localhost:5000/api/favorites", {
      data: {
        user_id: userID,
        document_id: doc.document_id
      }
    })
      .then(response => {
        console.log('Delete Success:', response.data);
        setDocuments(documents.filter(d => d.document_id !== doc.document_id));
      })
      .catch(error => console.error('Error deleting document:', error));
  };

  return (
    // <div className='favoritesWrapper'>
    <div className="favoritesPage">
      <h1>Document Favorites</h1>
      <ul className="document-list">
        {documents.map((doc, index) => (
          <li key={index} className="document-item">
            <strong>{doc.job_title}</strong> <br></br>
            <strong>{doc.company_name}</strong> <br></br>
            <strong>Document Type:</strong> {doc.document_type} <br />
            <strong>Created:</strong> {new Date(doc.created_at).toLocaleDateString()} <br />
            <button className='document-item-view-button' onClick={() => handleViewClick(doc)}>View</button>
            <button className='document-item-delete-button' onClick={() => handleDelete(doc)}>X</button>
          </li>
        ))}
      </ul>

      {selectedDocument && (
        <div className="popup-favorites">
          <div className="popup-content-favorites">
            <h2>{selectedDocument.job_title} at {selectedDocument.company_name} </h2>
            <h3>Created: {new Date(selectedDocument.created_at).toLocaleDateString()}</h3>
            {/* <p>{selectedDocument.content}</p> */}
            {selectedDocument.content
              .trim()
              .split('\n')
              .map((line, index) => (
                <p key={index} className="popup-line">{line}</p>
              ))}
            <button className='popup-favorites-close-button' onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}

export default Favorites;