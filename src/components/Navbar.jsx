import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authService } from '../utils/auth';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    authService.logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-brand" onClick={() => navigate('/dashboard')}>
          <h2>TicketFlow</h2>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <button
            className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
            onClick={() => {
              navigate('/dashboard');
              setMenuOpen(false);
            }}
          >
            Dashboard
          </button>
          <button
            className={`nav-link ${isActive('/tickets') ? 'active' : ''}`}
            onClick={() => {
              navigate('/tickets');
              setMenuOpen(false);
            }}
          >
            Tickets
          </button>
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;