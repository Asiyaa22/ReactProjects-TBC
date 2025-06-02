import { StrictMode } from 'react'           // Helps identify potential problems in React app during development
import { createRoot } from 'react-dom/client' // New React 18 method to create a root for rendering
import './index.css'                         // Import global CSS styles for the app
import App from './App.jsx'                  // Import main App component

// Find the HTML element with id 'root' and create a React root to render the App component inside StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
