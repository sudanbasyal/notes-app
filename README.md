# EasyNotes

## Overview

This is a React + TypeScript frontend application using Vite, Redux Toolkit, React Router v6, Formik, and Tailwind CSS. The project features authentication, notes management along with category management

---

## Engineering Decisions

- **Vite** was chosen for fast development and build times.
- **Redux Toolkit** is used for state management due to its simplicity and best practices.
- **React Router v6** is used for routing, with protected and public route wrappers.
- **Formik + Yup** handle forms and validation for robust user experience.
- **Tailwind CSS** is used for styling.
- **Error boundaries** are implemented using a classic React class component to catch runtime errors and display a friendly UI.
- **Component structure** is modular, with UI, forms, features, and hooks separated for maintainability.
- **API calls** are abstracted in the `features/api.ts` and related services for scalability.

---

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 18.x or higher)
- [npm](https://www.npmjs.com/) 
- [PostgreSQL](https://www.postgresql.org/)

## Project Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/sudanbasyal/notes-app
   cd notes-app
   ```

2. **Copy environment variables:**

   ```sh
   cp .env.example .env
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

4. **Start the development server:**

   ```sh
   npm run dev
   ```

5. **Build for production:**

   ```sh
   npm run build
   ```

6. **Preview the production build:**
   ```sh
   npm run preview
   ```

---

## Assumptions

- **API**: The backend API endpoints and data contracts are assumed to be available and compatible with the Redux Toolkit Query services.
- **Authentication**: Auth state is managed via Redux and assumed to be persisted as needed.
- **Error Handling**: All runtime errors in the React tree are caught by the classic error boundary. Route-level errors are handled using a custom NotFound page.
- **Primary Color**: The primary color for app is #007F70

---

## Project Structure

- `src/components/` - Reusable UI and form components
- `src/features/` - Redux slices and API services
- `src/hooks/` - Custom React hooks
- `src/pages/` - Page-level components for routing
- `src/routes/` - Route definitions and wrappers
- `src/constants/` - Static data and configuration
- `src/lib/` - Utility functions
- `src/store/` - Redux store setup

---

## More

To learn React, check out the [React documentation](https://react.dev/).
