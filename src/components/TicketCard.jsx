import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket, onEdit, onDelete }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'open':
        return 'status-open';
      case 'in_progress':
        return 'status-progress';
      case 'closed':
        return 'status-closed';
      default:
        return '';
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatStatus = (status) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="ticket-card">
      <div className="ticket-card-header">
        <div className="ticket-badges">
          <span className={`status-badge ${getStatusClass(ticket.status)}`}>
            {formatStatus(ticket.status)}
          </span>
          {ticket.priority && (
            <span className={`priority-badge ${getPriorityClass(ticket.priority)}`}>
              {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
            </span>
          )}
        </div>
        <span className="ticket-id">#{ticket.id}</span>
      </div>

      <div className="ticket-card-body">
        <h3 className="ticket-title">{ticket.title}</h3>
        {ticket.description && (
          <p className="ticket-description">{ticket.description}</p>
        )}
      </div>

      <div className="ticket-card-footer">
        <span className="ticket-date">
          Created: {formatDate(ticket.createdAt)}
        </span>
        <div className="ticket-actions">
          <button
            className="action-btn edit-btn"
            onClick={() => onEdit(ticket)}
            aria-label="Edit ticket"
          >
            ✏️ Edit
          </button>
          <button
            className="action-btn delete-btn"
            onClick={() => onDelete(ticket.id)}
            aria-label="Delete ticket"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;