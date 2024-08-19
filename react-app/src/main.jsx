import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import './index.css';
import ProfilePage from './pages/ProfilePage.jsx';
import Login from './pages/Login.jsx';
import Header from './pages/Header.jsx';

const Main = () => {
  // Handles whether the user is logged in or not (global)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userID, setUserID] = useState(1);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage userID={userID}/>} />
        <Route path="*" element={<Home />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);