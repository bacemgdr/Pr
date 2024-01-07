import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../components/header/header.css';

function Header() {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user-related items from local storage on logout
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');

    // Navigate to the login page after logout
    navigate('/login');
  };

  return (
    <div className="header">
      <h1>Header</h1>
      {user ? (
        // If user is logged in, display user's name and logout button
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // If user is not logged in, display connect button
        <Link to="/login">Connect</Link>
      )}
    </div>
  );
}

export default Header;
