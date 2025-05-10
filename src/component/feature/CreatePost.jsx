import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import { FaPencilAlt } from 'react-icons/fa';
import './CreatePost.css';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [platforms, setPlatforms] = useState({
    facebook: false,
    instagram: false,
    linkedin: false,
    x: false, // x = Twitter now
  });

  const handlePlatformChange = (e) => {
    const { name, checked } = e.target;
    setPlatforms((prev) => ({ ...prev, [name]: checked }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!caption || !image) {
      alert('Please provide both a caption and an image.');
      return;
    }
  
    // Create structured form data object for the backend
    const structuredFormData = {
      auth_tokens: {
        // Replace with actual tokens from the user
        facebook: 'dummy_facebook_token',
        instagram: 'dummy_instagram_token',
        linkedin: 'dummy_linkedin_token',
        x: 'dummy_x_token', // Assuming this is for Twitter (X)
      },
      platform_settings: {
        facebook: platforms.facebook,
        instagram: platforms.instagram,
        linkedin: platforms.linkedin,
        x: platforms.x, // Ensure platforms object contains boolean values
      },
      post_data: {
        caption: {
          text: caption,
        },
        media: {
          file: image,
        },
      },
    };
  
    try {
      const backendResponse = await createPostRequest(structuredFormData);
      console.log('Post successfully created:', backendResponse);
      alert('Post successfully created on selected platforms!');
    } catch (error) {
      console.error('Error creating post:', error.message);
      alert('Failed to create post: ' + error.message);
    }
  };
  
  // Helper function to send POST request
  const createPostRequest = async (formData) => {
    const data = new FormData();
    // Add caption and media
    data.append('caption', formData.post_data.caption.text);
    data.append('media', formData.post_data.media.file); // For the image file
  
    // Add platform settings and auth tokens (as JSON)
    data.append('platform_settings', JSON.stringify(formData.platform_settings));
    data.append('auth_tokens', JSON.stringify(formData.auth_tokens));
  
    const response = await fetch('http://localhost:2000/create', {
      method: 'POST',
      body: data,
    });
  
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
  
    return await response.json();
  };
  

  return (
    <Card className="mb-4 create-post-card">
      <Card.Body className="ms-2">
        <Card.Text className="text-secondary">
          <p>Create Post</p>
          <Form onSubmit={handleSubmit}>
            {/* Caption */}
            <textarea
              className="form-control w-100 mb-3"
              placeholder="Caption?"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows="3"
              required
            />

            {/* Image Upload (Updated Version) */}
            <div className="mb-3">
              <label 
                htmlFor="fileInput" 
                className="d-block cursor-pointer"
                style={{
                  border: '2px dashed #ddd',
                  borderRadius: '8px',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Preview"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div className="text-center p-4">
                    <div style={{ fontSize: '48px', color: '#6c757d' }}>+</div>
                    <div>Click to upload image</div>
                  </div>
                )}
              </label>
              <input
                id="fileInput"
                type="file"
                className="form-control d-none"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            {/* Platform Selection */}
            <div className="mb-4">
              <label className="mb-2">Select Platforms:</label>
              {['facebook', 'instagram', 'linkedin', 'x'].map((platform) => (
                <div className="form-check" key={platform}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={platform}
                    name={platform}
                    checked={platforms[platform]}
                    onChange={handlePlatformChange}
                  />
                  <label className="form-check-label text-capitalize" htmlFor={platform}>
                    {platform === 'x' ? 'Twitter (X)' : platform}
                  </label>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="secondary" className="w-100 mt-3">
              <FaPencilAlt className="me-2" />
              <span>Post</span>
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>

  );
};

export default CreatePost;
