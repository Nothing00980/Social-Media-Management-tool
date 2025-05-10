import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/context/AuthContext";
import ProtectedRoute from "./component/route/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./component/shared/layout/footer";
import Header from "./component/shared/layout/header";
import Container from "react-bootstrap/Container";
import SocialMedia from "./component/pages/SocialMedia";
import Dashboard from "./component/dashboard/dashboard";
import Homepage from "./component/pages/homepage";
import PrivacyPolicy from "./component/route/PrivacyPolicy";
import TermsOfService from "./component/route/TermsOfService";

function App() {
  
  return (
    
    <AuthProvider>
      <Router>
        <Header />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />

          {/* Protected Route - Only accessible when logged in */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute>
              <Dashboard />
              </ProtectedRoute>}
          />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        

       

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
