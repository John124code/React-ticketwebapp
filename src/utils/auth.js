const SESSION_KEY = 'ticketapp_session';

export const authService = {
  login: (email, password) => {
    // Simulate authentication
    if (email && password.length >= 6) {
      const token = btoa(email + Date.now());
      const user = { email, name: email.split('@')[0] };
      localStorage.setItem(SESSION_KEY, JSON.stringify({ token, user }));
      return { success: true, user };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  signup: (name, email, password) => {
    // Simulate signup
    if (name && email && password.length >= 6) {
      const token = btoa(email + Date.now());
      const user = { email, name };
      localStorage.setItem(SESSION_KEY, JSON.stringify({ token, user }));
      return { success: true, user };
    }
    return { success: false, error: 'Invalid information provided' };
  },

  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  },

  isAuthenticated: () => {
    const session = localStorage.getItem(SESSION_KEY);
    return !!session;
  },

  getUser: () => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
      return JSON.parse(session).user;
    }
    return null;
  }
};