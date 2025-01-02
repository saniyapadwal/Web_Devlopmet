// UserProfile.js
import React from 'react';

function UserProfile({ user, viewCount, incrementViewCount }) {
  return (
    <div style={profileStyle}>
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        style={{ borderRadius: "50%", marginBottom: "20px" }}
      />
      <h2>{user.name}</h2>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <p><strong>Profile Views:</strong> {viewCount}</p>

      {/* Button to increment the view count */}
      <button onClick={incrementViewCount} style={buttonStyle}>
        View Profile
      </button>
    </div>
  );
}

// CSS styles for the profile card
const profileStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "300px",
  margin: "auto",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
};

// CSS styles for the button
const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default UserProfile;
