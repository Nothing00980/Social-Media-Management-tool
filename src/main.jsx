import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'


const clerkFrontendApi = import.meta.env.REACT_APP_CLERK_FRONTEND_API;
createRoot(document.getElementById('root')).render(
  <StrictMode>

      <ClerkProvider frontendApi={clerkFrontendApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
