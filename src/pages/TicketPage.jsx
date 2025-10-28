import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ticketService } from '../utils/ticketService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TicketForm from '../components/TicketForm';
import TicketCard from '../components/TicketCard';
import ConfirmDialog from '../components/ConfirmDialog';
import './TicketPage.css';

const TicketPage = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadTickets();
  }, []);

  useEffect(() => {
    filterTickets();
  }, [tickets, filter, searchTerm]);

  const loadTickets = () => {
    const allTickets = ticketService.getAll();
    setTickets(allTickets);
  };

  const filterTickets = () => {
    let filtered = [...tickets];

    // Filter by status
    if (filter !== 'all') {
      filtered = filtered.filter(ticket => ticket.status === filter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(ticket =>
        ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (ticket.description && ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredTickets(filtered);
  };

  const handleCreateTicket = (ticketData) => {
    const validation = ticketService.validate(ticketData);
    if (!validation.isValid) {
      Object.values(validation.errors).forEach(error => {
        toast.error(error);
      });
      return false;
    }

    try {
      ticketService.create(ticketData);
      loadTickets();
      setShowForm(false);
      toast.success('Ticket created successfully!');
      return true;
    } catch (error) {
      toast.error('Failed to create ticket. Please try again.');
      return false;
    }
  };

  const handleUpdateTicket = (ticketData) => {
    const validation = ticketService.validate(ticketData);
    if (!validation.isValid) {
      Object.values(validation.errors).forEach(error => {
        toast.error(error);
      });
      return false;
    }

    try {
      ticketService.update(editingTicket.id, ticketData);
      loadTickets();
      setEditingTicket(null);
      setShowForm(false);
      toast.success('Ticket updated successfully!');
      return true;
    } catch (error) {
      toast.error('Failed to update ticket. Please try again.');
      return false;
    }
  };

  const handleDeleteTicket = (id) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = () => {
    try {
      ticketService.delete(deleteConfirm);
      loadTickets();
      setDeleteConfirm(null);
      toast.success('Ticket deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete ticket. Please try again.');
    }
  };

  const handleEdit = (ticket) => {
    setEditingTicket(ticket);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingTicket(null);
  };

  const handleNewTicket = () => {
    setEditingTicket(null);
    setShowForm(true);
  };

  return (
    <div className="ticket-page">
      <Navbar />

      <div className="ticket-content">
        <div className="container">
          <div className="ticket-header">
            <div>
              <h1>Ticket Management</h1>
              <p>Create, view, edit, and manage your support tickets</p>
            </div>
            <button className="btn btn-primary" onClick={handleNewTicket}>
              + New Ticket
            </button>
          </div>

          {/* Filters and Search */}
          <div className="ticket-filters">
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All ({tickets.length})
              </button>
              <button
                className={`filter-btn ${filter === 'open' ? 'active' : ''}`}
                onClick={() => setFilter('open')}
              >
                Open ({tickets.filter(t => t.status === 'open').length})
              </button>
              <button
                className={`filter-btn ${filter === 'in_progress' ? 'active' : ''}`}
                onClick={() => setFilter('in_progress')}
              >
                In Progress ({tickets.filter(t => t.status === 'in_progress').length})
              </button>
              <button
                className={`filter-btn ${filter === 'closed' ? 'active' : ''}`}
                onClick={() => setFilter('closed')}
              >
                Closed ({tickets.filter(t => t.status === 'closed').length})
              </button>
            </div>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search tickets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search tickets"
              />
              <span className="search-icon">🔍</span>
            </div>
          </div>

          {/* Ticket Form */}
          {showForm && (
            <TicketForm
              ticket={editingTicket}
              onSubmit={editingTicket ? handleUpdateTicket : handleCreateTicket}
              onCancel={handleCancel}
            />
          )}

          {/* Tickets List */}
          <div className="tickets-section">
            {filteredTickets.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📭</div>
                <h3>No tickets found</h3>
                <p>
                  {searchTerm
                    ? 'Try adjusting your search or filters'
                    : 'Create your first ticket to get started'}
                </p>
              </div>
            ) : (
              <div className="tickets-grid">
                {filteredTickets.map(ticket => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onEdit={handleEdit}
                    onDelete={handleDeleteTicket}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteConfirm && (
        <ConfirmDialog
          title="Delete Ticket"
          message="Are you sure you want to delete this ticket? This action cannot be undone."
          onConfirm={confirmDelete}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default TicketPage;