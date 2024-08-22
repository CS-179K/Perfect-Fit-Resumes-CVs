import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import './index.css';
import ProfilePage from './pages/ProfilePage.jsx';
import Login from './pages/Login.jsx';
import Header from './pages/Header.jsx';
import SignUp from './pages/Signup.jsx'
import Resume from './pages/ResumePage.jsx'

const Main = () => {
  // Handles whether the user is logged in or not (global)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userID, setUserID] = useState(0);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserID={setUserID} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserID={setUserID} />} />
        <Route path ="/signup" element={<SignUp />} />
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