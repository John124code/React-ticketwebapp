# TicketFlow - React Ticket Management Web App

A comprehensive ticket management system built with React for HNG Internship Stage 2, featuring full CRUD operations, authentication, responsive design, and an intuitive user interface.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![React Router](https://img.shields.io/badge/React%20Router-6.20.0-red)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Project Structure](#-project-structure)
- [Design Features](#-design-features)
- [Form Validation Rules](#-form-validation-rules)
- [Security & Authentication](#-security--authentication)
- [Accessibility](#-accessibility)
- [Responsive Design](#-responsive-design)
- [Testing](#-testing)
- [Build for Production](#-build-for-production)
- [Troubleshooting](#-troubleshooting)
- [Demo Credentials](#-demo-credentials)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## 🚀 Features

### Core Functionality
- ✅ **Landing Page**: Eye-catching hero section with wavy SVG background and animated decorative circles
- ✅ **User Authentication**: Secure login and signup with comprehensive form validation
- ✅ **Dashboard**: Real-time statistics displaying total, open, in-progress, and closed tickets
- ✅ **Ticket Management**: Complete CRUD operations
  - Create new tickets with validation
  - View all tickets with filtering and search
  - Edit existing tickets
  - Delete tickets with confirmation dialog
- ✅ **Real-time Validation**: Inline error messages and field-level validation
- ✅ **Toast Notifications**: User-friendly feedback for all actions
- ✅ **Protected Routes**: Session-based authentication with automatic redirects
- ✅ **Consistent Footer**: Professional footer across all pages
- ✅ **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- ✅ **Accessibility**: WCAG compliant with semantic HTML and ARIA labels

## 🛠️ Technologies Used

- **React** 18.2.0 - Frontend library
- **React Router DOM** 6.20.0 - Navigation and routing
- **React Toastify** 9.1.3 - Toast notifications
- **React Scripts** 5.0.1 - Build tooling
- **LocalStorage API** - Data persistence
- **CSS3** - Custom styling with animations
- **SVG** - Wavy backgrounds and decorative elements

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)

## 🔧 Installation & Setup

### 1. Navigate to Project Directory

```bash
cd c:\Users\JOHN\Desktop\ticket-webapp
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- react
- react-dom
- react-router-dom
- react-toastify
- react-scripts

### 3. Start Development Server

```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

### 4. Build for Production (Optional)

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## 🎯 Usage Guide

### First-Time Setup

1. **Access Landing Page**: Open `http://localhost:3000`
2. **Create Account**: Click "Get Started" or "Sign Up"
3. **Fill Registration Form**:
   - Name: Your full name
   - Email: Valid email address
   - Password: Minimum 6 characters
   - Confirm Password: Must match password
4. **Submit**: Click "Sign Up" button
5. **Auto Login**: You'll be automatically logged in and redirected to dashboard

### Dashboard Overview

The dashboard displays:
- **Total Tickets**: All tickets in the system
- **Open Tickets**: Tickets awaiting action (Green)
- **In Progress**: Tickets being worked on (Amber)
- **Closed Tickets**: Completed tickets (Gray)

### Creating a Ticket

1. Navigate to **Tickets** page from dashboard
2. Click **"+ New Ticket"** button
3. Fill in the form:
   - **Title** (Required): 3-100 characters
   - **Status** (Required): Select from dropdown
     - Open
     - In Progress
     - Closed
   - **Priority** (Optional): Low, Medium, or High
   - **Description** (Optional): Up to 500 characters
4. Click **"Create Ticket"**
5. Success toast notification appears
6. New ticket displays in the list

### Editing a Ticket

1. Locate the ticket you want to edit
2. Click the **"✏️ Edit"** button on the ticket card
3. Modify any fields in the form
4. Click **"Update Ticket"**
5. Success notification confirms the update

### Deleting a Ticket

1. Locate the ticket you want to delete
2. Click the **"🗑️ Delete"** button
3. Confirm deletion in the popup dialog
4. Click **"Confirm"**
5. Ticket is removed with success notification

### Filtering Tickets

Use the filter buttons to view:
- **All**: Show all tickets
- **Open**: Show only open tickets
- **In Progress**: Show only in-progress tickets
- **Closed**: Show only closed tickets

### Searching Tickets

1. Type in the search box at the top
2. Search works on:
   - Ticket titles
   - Ticket descriptions
3. Results update in real-time

### Logging Out

1. Click **"Logout"** button in the navigation bar
2. Session is cleared
3. Redirected to landing page
4. Protected routes become inaccessible

## 📁 Project Structure

```
ticket-webapp/
├── public/
│   ├── index.html              # HTML template
│   └── favicon.ico             # App icon
│
├── src/
│   ├── components/             # Reusable components
│   │   ├── ConfirmDialog.jsx   # Delete confirmation modal
│   │   ├── ConfirmDialog.css
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Footer.css
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Navbar.css
│   │   ├── ProtectedRoute.jsx  # Route protection wrapper
│   │   ├── TicketCard.jsx      # Individual ticket card
│   │   ├── TicketCard.css
│   │   ├── TicketForm.jsx      # Create/Edit ticket form
│   │   └── TicketForm.css
│   │
│   ├── pages/                  # Page components
│   │   ├── Auth.css            # Shared auth styles
│   │   ├── Dashboard.jsx       # Dashboard page
│   │   ├── Dashboard.css
│   │   ├── LandingPage.jsx     # Landing/Home page
│   │   ├── LandingPage.css
│   │   ├── Login.jsx           # Login page
│   │   ├── Signup.jsx          # Signup page
│   │   ├── TicketPage.jsx      # Ticket management page
│   │   └── TicketPage.css
│   │
│   ├── utils/                  # Utility functions
│   │   ├── auth.js             # Authentication service
│   │   └── ticketService.js    # Ticket CRUD operations
│   │
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global app styles
│   ├── index.js                # React entry point
│   └── index.css               # Global CSS reset
│
├── package.json                # Dependencies and scripts
├── README.md                   # This file
└── .gitignore                  # Git ignore rules
```

## 🎨 Design Features

### Layout Specifications

- **Max Width**: 1440px centered on large screens
- **Container Padding**: 20px on mobile, auto-centered on desktop
- **Responsive Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Hero Section

- **Background**: Purple gradient (135deg, #667eea to #764ba2)
- **Wavy SVG**: Custom wave pattern at bottom edge
- **Decorative Circles**: 
  - Circle 1: 300px, top-right, 6s float animation
  - Circle 2: 200px, bottom-left, 8s reverse animation
- **Typography**: Large bold heading with shadow effects

### Feature Boxes

- **Style**: Card-based with shadows
- **Border Radius**: 12px
- **Hover Effect**: Lift up 8px with increased shadow
- **Icons**: Emoji-based for quick recognition

### Status Color Coding

| Status | Color | Hex Code | Use Case |
|--------|-------|----------|----------|
| Open | Green | #48bb78 | New tickets awaiting action |
| In Progress | Amber | #ed8936 | Tickets being worked on |
| Closed | Gray | #718096 | Completed tickets |

### Priority Badges

- **High**: Red background (#fed7d7)
- **Medium**: Yellow background (#fefcbf)
- **Low**: Blue background (#bee3f8)

## ✅ Form Validation Rules

### Title Field
- ✅ **Required**: Cannot be empty
- ✅ **Minimum Length**: 3 characters
- ✅ **Maximum Length**: 100 characters
- ❌ Error: "Title is required" or "Title must be at least 3 characters"

### Status Field
- ✅ **Required**: Must select a value
- ✅ **Allowed Values**: 
  - `open`
  - `in_progress`
  - `closed`
- ❌ Error: "Status is required" or "Invalid status value"

### Description Field
- ⚪ **Optional**: Not required
- ✅ **Maximum Length**: 500 characters
- ⚪ Character counter displayed
- ❌ Error: "Description must not exceed 500 characters"

### Priority Field
- ⚪ **Optional**: Not required
- ✅ **Allowed Values**: `low`, `medium`, `high`
- ⚪ Default: `medium`

### Email Field (Authentication)
- ✅ **Required**: Cannot be empty
- ✅ **Format**: Must be valid email (contains @ and .)
- ❌ Error: "Email is invalid"

### Password Field (Authentication)
- ✅ **Required**: Cannot be empty
- ✅ **Minimum Length**: 6 characters
- ❌ Error: "Password must be at least 6 characters"

## 🔒 Security & Authentication

### Session Management

- **Storage Key**: `ticketapp_session`
- **Storage Method**: localStorage
- **Token Format**: Base64 encoded string
- **Session Data**: Includes user email and name

### Authentication Flow

```
1. User submits login/signup form
2. Credentials validated
3. Token generated and stored in localStorage
4. User object stored with token
5. Redirect to dashboard
6. Protected routes check for valid session
7. Logout clears localStorage and redirects
```

### Protected Routes

Routes requiring authentication:
- `/dashboard` - Dashboard page
- `/tickets` - Ticket management page

Unprotected routes:
- `/` - Landing page
- `/auth/login` - Login page
- `/auth/signup` - Signup page

### Authorization Rules

- ✅ Valid session token required for protected routes
- ❌ Unauthorized access redirects to `/auth/login`
- ✅ Logout clears session and redirects to `/`
- ✅ Session persists across page refreshes

## ♿ Accessibility

### Semantic HTML

- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` elements
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels associated with inputs
- Button elements for interactive actions

### ARIA Labels

```html
<input aria-label="Email Address" />
<button aria-label="Edit ticket" />
<input aria-required="true" />
```

### Keyboard Navigation

- ✅ Tab through all interactive elements
- ✅ Enter to submit forms
- ✅ Escape to close modals
- ✅ Visible focus states on all elements

### Color Contrast

- ✅ Text: Minimum 4.5:1 contrast ratio
- ✅ Buttons: Clear focus indicators
- ✅ Status badges: High contrast colors

### Screen Reader Support

- Form error messages announced
- Success/error toasts announced
- Button labels descriptive

## 📱 Responsive Design

### Mobile (< 768px)

- Single column layout
- Stacked navigation menu
- Full-width buttons
- Touch-friendly tap targets (44px minimum)
- Reduced font sizes
- Hamburger menu (if implemented)

### Tablet (768px - 1024px)

- Two-column grid for features
- Flexible navigation
- Optimized spacing

### Desktop (> 1024px)

- Three-column grid for features
- Max-width 1440px container
- Horizontal navigation
- Multi-column ticket grid

## 🧪 Testing

### Manual Testing Checklist

#### Landing Page
- [ ] Wavy background displays correctly
- [ ] Decorative circles animate
- [ ] "Get Started" button navigates to signup
- [ ] "Login" button navigates to login
- [ ] Footer displays at bottom

#### Authentication
- [ ] Empty form shows validation errors
- [ ] Invalid email shows error
- [ ] Short password shows error
- [ ] Successful signup redirects to dashboard
- [ ] Successful login redirects to dashboard
- [ ] Toast notifications appear

#### Dashboard
- [ ] Statistics display correctly
- [ ] Open ticket count matches
- [ ] Navigation works
- [ ] Logout clears session
- [ ] Footer displays

#### Ticket Management
- [ ] Create ticket with valid data succeeds
- [ ] Create ticket with invalid data shows errors
- [ ] Edit ticket updates data
- [ ] Delete shows confirmation dialog
- [ ] Delete removes ticket
- [ ] Filters work correctly
- [ ] Search filters results
- [ ] Status badges display correct colors
- [ ] Footer displays

### Automated Testing

```bash
npm test
```

Runs test suite (if tests are implemented).

## 🏗️ Build for Production

### Create Production Build

```bash
npm run build
```

### Output

```
build/
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── index.html
└── ...
```

### Deployment

The `build` folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

## 🐛 Troubleshooting

### Common Issues

#### Issue: "npm is not recognized"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

#### Issue: "Module not found: react-toastify"
**Solution**: 
```bash
npm install react-toastify
```

#### Issue: Port 3000 already in use
**Solution**: 
- Kill process on port 3000
- Or use different port (app will prompt)

#### Issue: Changes not reflecting
**Solution**: 
- Hard refresh: `Ctrl + Shift + R`
- Clear browser cache
- Restart development server

#### Issue: White screen on load
**Solution**: 
- Check browser console for errors
- Verify all files are saved
- Check for typos in imports

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Review the terminal output
3. Verify all dependencies are installed
4. Ensure Node.js version is compatible

## 🔑 Demo Credentials

For testing purposes, any valid email and password (6+ characters) will work:

**Example 1:**
- Email: `demo@example.com`
- Password: `password123`

**Example 2:**
- Email: `john@test.com`
- Password: `test1234`

**Example 3:**
- Email: `jane.doe@email.com`
- Password: `mypass123`

## 📸 Screenshots

### Landing Page
Eye-catching hero section with wavy background and call-to-action buttons.

### Dashboard
Real-time statistics with color-coded ticket counts.

### Ticket Management
Complete CRUD interface with filtering and search capabilities.

## 🤝 Contributing

This project was created for the HNG Internship Stage 2 task. Contributions and feedback are welcome!

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the HNG Internship program.

## 🙏 Acknowledgments

- **HNG Internship** - For providing this learning opportunity
- **React Team** - For the amazing framework
- **Community** - For support and resources

## 🔗 Useful Links

- **HNG Internship**: [https://hng.tech/internship](https://hng.tech/internship)
- **Hire Talent**: [https://hng.tech/hire](https://hng.tech/hire)
- **React Documentation**: [https://reactjs.org/](https://reactjs.org/)
- **React Router**: [https://reactrouter.com/](https://reactrouter.com/)
- **React Toastify**: [https://fkhadra.github.io/react-toastify/](https://fkhadra.github.io/react-toastify/)

---

**Built with ❤️ for HNG Internship Stage 2**

*Last Updated: October 28, 2025*
