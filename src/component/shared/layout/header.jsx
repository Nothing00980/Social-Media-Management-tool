import { useAuth } from "../../context/AuthContext"; // Import the useAuth hook
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"; // Import Button component
import "./header.css";
import logo from "../../../../public/images/social.png"; // Import your logo
import googleIcon from "../../../../public/images/search.png"; // Import Google icon

export default function Header() {
  const { user, logout } = useAuth(); // Use the AuthContext

  // Function to handle login (Google OAuth)
  const handleLogin = () => {
    window.location.href = "http://localhost:2000/auth/google"; // Redirect to Google OAuth
  };

  // Function to handle logout
  const handleLogout = async () => {
    await logout(); // Call logout from context
  localStorage.removeItem("user");   // Remove persisted data
  sessionStorage.removeItem("user");
  // Optionally clear cookies if using them for OAuth
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = "/"; // Redirect to home page after logout
  };

  return (
    <Navbar expand="lg" className="mb-4 position-sticky top-0 z-3" bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="60" height="auto" className="me-2" />
        </Navbar.Brand>

        {/* Conditionally Render Login/Logout Button */}
        {user ? (
          // If user is authenticated, show Logout button
          <Button 
            variant="light" 
            className="d-flex align-items-center gap-2 px-3 py-2"
            onClick={handleLogout} // Trigger logout on click
          >
            <span>Logout</span>
          </Button>
        ) : (
          // If user is not authenticated, show Login button
          <Button 
            variant="light" 
            className="d-flex align-items-center gap-2 px-3 py-2"
            onClick={handleLogin} // Trigger login on click
          >
            <img src={googleIcon} alt="Google" width="20" height="20" />
            <span>Login</span>
          </Button>
        )}
      </Container>
    </Navbar>
  );
}
