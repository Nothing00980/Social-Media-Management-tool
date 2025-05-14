import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const AuthPage = () => {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const [platform, setPlatform] = useState("");
  const [authStatus, setAuthStatus] = useState({});
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  // Load auth status based on logged-in user
  useEffect(() => {
    if (user?.email) {
      const allData = JSON.parse(localStorage.getItem("userSocialAuth") || "{}");
      const userData = allData[user.email] || {};
      setAuthStatus(userData);
    } else {
      setAuthStatus({});
    }
  }, [user]);

  // Mock authentication logic
  const authenticate = (platformName) => {
    if (!user?.email) return alert("You must be logged in to connect.");
    setPlatform(platformName);
    setCredentials({ username: "", password: "" });
    setShow(true);
  };

  const handleLogin = () => {
    const allData = JSON.parse(localStorage.getItem("userSocialAuth") || "{}");
    const updated = {
      ...allData[user.email],
      [platform]: true,
    };
    allData[user.email] = updated;
    localStorage.setItem("userSocialAuth", JSON.stringify(allData));
    setAuthStatus(updated);
    setShow(false);
  };

  const handleClose = () => setShow(false);

  const renderCard = (platformKey, platformName, logoUrl) => (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <img src={logoUrl} alt={platformName} style={{ width: "30px", height: "30px" }} />
          {!authStatus[platformKey] ? (
            <button className="btn btn-danger" onClick={() => authenticate(platformKey)}>
              Connect
            </button>
          ) : (
            <span className="text-success">✔</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h2 className="text-center my-5">Social Media Authentication (Mock)</h2>

      <div className="row justify-content-center">
        {renderCard("facebook", "Facebook", "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg")}
        {renderCard("twitter", "Twitter", "https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg")}
        {renderCard("linkedin", "LinkedIn", "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg")}
      </div>

      {/* Mock Login Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mock {platform.charAt(0).toUpperCase() + platform.slice(1)} Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username or Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Mock Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AuthPage;
