import { StrictMode } from 'react'           // Import StrictMode for highlighting potential problems in app
import { createRoot } from 'react-dom/client' // Import createRoot for React 18+ root API
import './index.css'                         // Import global CSS styles
import App from './App.jsx'                  // Import main App component

// Create a React root and render the App component inside StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
