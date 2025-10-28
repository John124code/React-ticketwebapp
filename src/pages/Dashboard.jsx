import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../utils/auth';
import { ticketService } from '../utils/ticketService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0
  });

  useEffect(() => {
    const currentUser = authService.getUser();
    setUser(currentUser);

    // Load ticket stats
    const tickets = ticketService.getAll();
    const newStats = {
      total: tickets.length,
      open: tickets.filter(t => t.status === 'open').length,
      inProgress: tickets.filter(t => t.status === 'in_progress').length,
      closed: tickets.filter(t => t.status === 'closed').length
    };
    setStats(newStats);
  }, []);

  return (
    <div className="dashboard-page">
      <Navbar />
      
      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-header">
            <div>
              <h1>Welcome back, {user?.name || 'User'}!</h1>
              <p>Here's what's happening with your tickets today.</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card stat-total">
              <div className="stat-icon">📊</div>
              <div className="stat-info">
                <h3>{stats.total}</h3>
                <p>Total Tickets</p>
              </div>
            </div>

            <div className="stat-card stat-open">
              <div className="stat-icon">🟢</div>
              <div className="stat-info">
                <h3>{stats.open}</h3>
                <p>Open Tickets</p>
              </div>
            </div>

            <div className="stat-card stat-progress">
              <div className="stat-icon">🟡</div>
              <div className="stat-info">
                <h3>{stats.inProgress}</h3>
                <p>In Progress</p>
              </div>
            </div>

            <div className="stat-card stat-closed">
              <div className="stat-icon">⚫</div>
              <div className="stat-info">
                <h3>{stats.closed}</h3>
                <p>Closed Tickets</p>
              </div>
            </div>
          </div>

          <div className="dashboard-actions">
            <div className="action-box">
              <h2>Quick Actions</h2>
              <p>Manage your tickets efficiently</p>
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/tickets')}
              >
                View All Tickets
              </button>
            </div>

            <div className="action-box">
              <h2>Need Help?</h2>
              <p>Check our documentation and support</p>
              <button className="btn btn-secondary">
                Visit Help Center
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;