# Multi-Page Portfolio App (React + MUI)

A responsive, modern, and fully functional multi-page portfolio built with **React**, **Material UI (MUI)**, and **React Router DOM**. Features include protected routes, interactive components, and theming.

## Features

- **Protected Routes:** Example — Projects page only accessible after login  
- **Multi-page Navigation:** Built with React Router  
- **Light/Dark Mode Toggle:** Using React Context API with MUI icons, theme preference saved in localStorage  
- **User Authentication:** Simple global state management with Context API and localStorage  
- **Reusable Components:** Clean layout with smooth animations  
- **Responsive Contact Form**

## Tech Stack

- **React** – Frontend framework  
- **React Router DOM** – Client-side routing  
- **Material UI (MUI)** – UI component library  
- **JavaScript (ES6+)** – Programming language  
- **localStorage** – Client-side persistence  
- **React Context API** – Global state management  

## React Routes

| Path        | Description      | Protected? |
|-------------|------------------|------------|
| `/`         | Home page        | No         |
| `/about`    | About page       | No         |
| `/projects` | Projects page    | Yes        |
| `/contact`  | Contact page     | No         |
| `/profile`  | User Profile     | Yes        |
| `/login`    | Login page       | No         |

## Theme Toggle

Toggle between light and dark themes from the navbar using Material UI icons. The selected theme is persisted in localStorage to maintain user preference across sessions.

## Authentication

A simple login/logout simulation implemented using React Context API and localStorage. Future improvements could include integration with Firebase, JWT authentication, or OAuth providers.

## Future Enhancements

- Add email integration in the contact form (e.g., via EmailJS or Firebase Functions)  
- Connect to Firebase or other backend services for real authentication and data persistence  
- Implement form validation and feedback  
- Add animations and transitions for smoother UX  
- Add unit and integration tests for key components  

## Installation & Setup

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install react-router-dom
npm start


## PORT - 5173