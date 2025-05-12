import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {Nango} from '@nangohq/frontend';

const AuthPage = () => {
  const [show, setShow] = useState(false); // Modal state
  const [authStatus, setAuthStatus] = useState({}); // Track status of each social media auth
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track overall authentication status

  // Handle showing the modal for social media login
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Function to simulate successful authentication
  // const authenticate = async (platform) => {
  //   // Show modal
  //   setShow(true);
  
  //   try {
  //     // Step 1: Fetch token from backend
  //     const response = await fetch("http://localhost:2000/auth/token", {
  //       credentials: "include", // Ensures cookies are sent with the request
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch auth token from backend");
  //     }
  
  //     const data = await response.json();
  //     const token = data.token;
  
  //     if (!token) {
  //       throw new Error("Token not received from backend");
  //     }
  
  //     // Step 2: Determine platform auth URL
  //     let authUrl = "";
  //     switch (platform) {
  //       case "facebook":
  //         authUrl = `http://localhost:2000/auth/facebook?token=${token}`;
  //         break;
  //       case "instagram":
  //         authUrl = `http://localhost:2000/auth/instagram?token=${token}`;
  //         break;
  //       case "linkedin":
  //         authUrl = `http://localhost:2000/auth/linkedin?token=${token}`;
  //         break;
  //       case "twitter":
  //         authUrl = `http://localhost:2000/auth/twitter?token=${token}`;
  //         break;
  //       default:
  //         throw new Error("Unsupported platform");
  //     }
  
  //     // Step 3: Redirect to social media auth
  //     window.location.href = authUrl;
  
  //     // Step 4 (optional): Update UI state
  //     setAuthStatus((prevStatus) => ({
  //       ...prevStatus,
  //       [platform]: true,
  //     }));
  
  //     setIsAuthenticated(true);
  //   } catch (error) {
  //     console.error("Authentication error:", error.message);
  //     setShow(false);
  //   }
  // };
  
 


  return (
    <div className="container">
      <h2 className="text-center my-5">Social Media Authentication</h2>
      
      <div className="row justify-content-center">
        {/* Authentication Cards for Social Media */}
        
        {/* Facebook */}
        <div className="col-md-6 col-lg-4">
          <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                style={{ width: "30px", height: "30px" }}
              />
              {!authStatus.facebook ? (
                <button
                  className="btn btn-danger"
                  onClick={() => authenticate("facebook")}
                >
                  Connect
                </button>
              ) : (
                <span className="text-success">✔</span>
              )}
            </div>
          </div>
        </div>

        {/* X (Twitter) */}
        <div className="col-md-6 col-lg-4">
          <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
                alt="X (Twitter)"
                style={{ width: "30px", height: "30px" }}
              />
              {!authStatus.x ? (
                <button
                  className="btn btn-danger"
                  onClick={() => authenticate("twitter")}
                >
                  Connect
                </button>
              ) : (
                <span className="text-success">✔</span>
              )}
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="col-md-6 col-lg-4">
          <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                alt="Instagram"
                style={{ width: "30px", height: "30px" }}
              />
              {!authStatus.instagram ? (
                <button
                  className="btn btn-danger"
                  onClick={() => authenticate("instagram")}
                >
                  Connect
                </button>
              ) : (
                <span className="text-success">✔</span>
              )}
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="col-md-6 col-lg-4">
          <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn"
                style={{ width: "30px", height: "30px" }}
              />
              {!authStatus.linkedin ? (
                <button
                  className="btn btn-danger"
                  onClick={() => authenticate("linkedin")}
                >
                  Connect
                </button>
              ) : (
                <span className="text-success">✔</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Social Media Authentication */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Social Media Authentication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Authentication in progress...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AuthPage;
