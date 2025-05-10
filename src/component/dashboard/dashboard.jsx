import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import { Modal, Button } from "react-bootstrap";
import SocialMedia from "../pages/SocialMedia";  // Ensure this is correctly imported
import AuthModal from "../modal/AuthModal";  // Ensure the modal is correctly imported
import AuthPage from "../pages/AuthPage";

// Reusable DashboardCard with onClick support
const DashboardCard = ({ title, description, icon, onClick }) => {
  return (
    <div
      className="card text-dark bg-white shadow-sm rounded-3 p-3 border-0"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="card-body d-flex align-items-center">
        <span className="fs-2 me-3">{icon}</span>
        <div>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  // If the user is not authenticated, show the login button
  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h3 className="mb-4">User not logged in</h3>
        <a href="/auth/google" className="btn btn-primary btn-lg">
          Login with Google
        </a>
      </div>
    );
  }

  // Example click handlers for each card
  const handleCreatePost = () => {
    alert("Redirecting to post creation page...");
  };

  const handleCalendarView = () => {
    alert("Opening calendar...");
  };

  const handleTeamReports = () => {
    alert("Fetching team reports...");
  };

  const handleConnectSocial = () => {
    setShowModal(true);  // Show the modal when the "Platinum Plan" card is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false);  // Close the modal
  };

  return (
    <div className="container mt-4">
      <div className="row g-4">
        <div className="col-md-3">
          <DashboardCard
            title="Create a New Post"
            description="Publish, schedule or queue..."
            icon="📝"
            onClick={handleCreatePost}
          />
        </div>
        <div className="col-md-3">
          <DashboardCard
            title="Calendar View"
            description="Check your Socio Calendar..."
            icon="📅"
            onClick={handleCalendarView}
          />
        </div>
        <div className="col-md-3">
          <DashboardCard
            title="Team Reports"
            description="Check your team reports..."
            icon="📊"
            onClick={handleTeamReports}
          />
        </div>
        <div className="col-md-3">
          <DashboardCard
            title="Platinum Plan"
            description="Connect social media"
            icon="🔗"
            onClick={handleConnectSocial}  // Opens the modal
          />
        </div>
      </div>

      <div className="mt-4">
        <SocialMedia />
        </div>


      {/* Modal for Social Media Authentication */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Social Media Authentication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Authenticate with social media platforms:</p>
          <AuthPage></AuthPage>  {/* The SocialMedia component where user can authenticate */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>





  );
};

export default Dashboard;
