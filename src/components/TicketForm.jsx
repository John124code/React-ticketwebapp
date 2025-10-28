import React, { useState, useEffect } from 'react';
import './TicketForm.css';

const TicketForm = ({ ticket, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'open',
    priority: 'medium'
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (ticket) {
      setFormData({
        title: ticket.title || '',
        description: ticket.description || '',
        status: ticket.status || 'open',
        priority: ticket.priority || 'medium'
      });
    }
  }, [ticket]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title must not exceed 100 characters';
    }

    if (!formData.status) {
      newErrors.status = 'Status is required';
    } else if (!['open', 'in_progress', 'closed'].includes(formData.status)) {
      newErrors.status = 'Invalid status value';
    }

    if (formData.description && formData.description.length > 500) {
      newErrors.description = 'Description must not exceed 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      const success = onSubmit(formData);
      if (success) {
        // Reset form
        setFormData({
          title: '',
          description: '',
          status: 'open',
          priority: 'medium'
        });
        setErrors({});
      }
    }
  };

  return (
    <div className="ticket-form-container">
      <div className="ticket-form-header">
        <h2>{ticket ? 'Edit Ticket' : 'Create New Ticket'}</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">
              Title <span className="required">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? 'error' : ''}
              placeholder="Enter ticket title"
              aria-required="true"
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="status">
              Status <span className="required">*</span>
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={errors.status ? 'error' : ''}
              aria-required="true"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
            {errors.status && <span className="error-message">{errors.status}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? 'error' : ''}
            placeholder="Enter ticket description (optional)"
            rows="4"
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
          <span className="char-count">
            {formData.description.length}/500 characters
          </span>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {ticket ? 'Update Ticket' : 'Create Ticket'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;