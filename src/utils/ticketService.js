const TICKETS_KEY = 'ticketapp_tickets';

// Initialize with some sample tickets
const initializeTickets = () => {
  const existing = localStorage.getItem(TICKETS_KEY);
  if (!existing) {
    const sampleTickets = [
      {
        id: '1',
        title: 'Login issue',
        description: 'Unable to login with correct credentials',
        status: 'open',
        priority: 'high',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Feature request',
        description: 'Add dark mode support',
        status: 'in_progress',
        priority: 'medium',
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(TICKETS_KEY, JSON.stringify(sampleTickets));
  }
};

export const ticketService = {
  getAll: () => {
    initializeTickets();
    const tickets = localStorage.getItem(TICKETS_KEY);
    return tickets ? JSON.parse(tickets) : [];
  },

  getById: (id) => {
    const tickets = ticketService.getAll();
    return tickets.find(ticket => ticket.id === id);
  },

  create: (ticketData) => {
    const tickets = ticketService.getAll();
    const newTicket = {
      id: Date.now().toString(),
      ...ticketData,
      createdAt: new Date().toISOString()
    };
    tickets.push(newTicket);
    localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
    return newTicket;
  },

  update: (id, ticketData) => {
    const tickets = ticketService.getAll();
    const index = tickets.findIndex(ticket => ticket.id === id);
    if (index !== -1) {
      tickets[index] = {
        ...tickets[index],
        ...ticketData,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
      return tickets[index];
    }
    return null;
  },

  delete: (id) => {
    const tickets = ticketService.getAll();
    const filtered = tickets.filter(ticket => ticket.id !== id);
    localStorage.setItem(TICKETS_KEY, JSON.stringify(filtered));
    return true;
  },

  validate: (ticketData) => {
    const errors = {};

    if (!ticketData.title || ticketData.title.trim() === '') {
      errors.title = 'Title is required';
    } else if (ticketData.title.length < 3) {
      errors.title = 'Title must be at least 3 characters';
    } else if (ticketData.title.length > 100) {
      errors.title = 'Title must not exceed 100 characters';
    }

    if (!ticketData.status) {
      errors.status = 'Status is required';
    } else if (!['open', 'in_progress', 'closed'].includes(ticketData.status)) {
      errors.status = 'Status must be one of: open, in_progress, closed';
    }

    if (ticketData.description && ticketData.description.length > 500) {
      errors.description = 'Description must not exceed 500 characters';
    }

    if (ticketData.priority && !['low', 'medium', 'high'].includes(ticketData.priority)) {
      errors.priority = 'Priority must be one of: low, medium, high';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};