import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AuthModal = ({ show, handleClose }) => {
  const [authStatus, setAuthStatus] = useState({}); // Track status of each social media auth
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track overall authentication status

  // Function to simulate successful authentication
  const authenticate = (platform) => {
    setAuthStatus((prevStatus) => ({
      ...prevStatus,
      [platform]: true,
    }));

    setIsAuthenticated(true); // Set the overall authentication as successful
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Social Media Authentication</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="text-center mb-4">
          {isAuthenticated ? "You are now authenticated!" : "Authenticate with Social Media"}
        </h5>

        {/* Show authenticated user info */}
        {isAuthenticated ? (
          <div className="text-center">
            <h6>Welcome!</h6>
            <p>User's Name</p>
            <p>User's Email</p>
            <Button variant="danger" onClick={() => setIsAuthenticated(false)}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            {/* Social media authentication buttons */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                style={{ width: "30px", height: "30px" }}
              />
              {!authStatus.facebook ? (
                <Button
                  className="btn btn-primary"
                  onClick={() => authenticate("facebook")}
                >
                  Authenticate
                </Button>
              ) : (
                <span className="text-success">✔</span>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/60/X_logo.svg"
                alt="X (Twitter)"
                style={{ width: "30px", height: "30px" }}
              />
              {!authStatus.x ? (
                <Button
                  className="btn btn-primary"
                  onClick={() => authenticate("x")}
                >
                  Authenticate
                </Button>
              ) : (
                <span className="text-success">✔</span>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                alt="Instagram"
                style={{ width: "30px", height: "30px" }}
              />
              {!authStatus.instagram ? (
                <Button
                  className="btn btn-primary"
                  onClick={() => authenticate("instagram")}
                >
                  Authenticate
                </Button>
              ) : (
                <span className="text-success">✔</span>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                style={{ width: "30px", height: "30px" }}
              />
              {!authStatus.linkedin ? (
                <Button
                  className="btn btn-primary"
                  onClick={() => authenticate("linkedin")}
                >
                  Authenticate
                </Button>
              ) : (
                <span className="text-success">✔</span>
              )}
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
