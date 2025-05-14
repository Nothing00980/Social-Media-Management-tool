// 

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AuthPage = () => {
  const [show, setShow] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState(null);
  const [authStatus, setAuthStatus] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const platformNames = {
    facebook: "Facebook",
    twitter: "Twitter (X)",
    linkedin: "LinkedIn",
  };

  const platformLogos = {
    facebook:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    twitter: "https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg",
    linkedin:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
  };

  useEffect(() => {
    setAuthStatus({
      facebook: localStorage.getItem("facebook-auth") === "true",
      twitter: localStorage.getItem("twitter-auth") === "true",
      linkedin: localStorage.getItem("linkedin-auth") === "true",
    });
  }, []);

  const authenticate = (platform) => {
    setCurrentPlatform(platform);
    setUsername("");
    setPassword("");
    setShow(true);
  };

  const handleLogin = () => {
    if (!username || !password) return alert("Enter credentials");
    localStorage.setItem(`${currentPlatform}-auth`, "true");
    setAuthStatus((prev) => ({
      ...prev,
      [currentPlatform]: true,
    }));
    setShow(false);
  };

  return (
    <div className="container">
      <h2 className="text-center my-5">Social Media Authentication (Mock)</h2>
      <div className="row justify-content-center">
        {["facebook", "twitter", "linkedin"].map((platform) => (
          <div key={platform} className="col-md-6 col-lg-4">
            <div className="card mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <img
                  src={platformLogos[platform]}
                  alt={platform}
                  style={{ width: "30px", height: "30px" }}
                />
                {!authStatus[platform] ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => authenticate(platform)}
                  >
                    Connect
                  </button>
                ) : (
                  <span className="text-success">✔</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mock OAuth Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              src={platformLogos[currentPlatform]}
              alt="logo"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            Sign in to {platformNames[currentPlatform]}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Email or Username</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter ${platformNames[currentPlatform]} username`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AuthPage;
