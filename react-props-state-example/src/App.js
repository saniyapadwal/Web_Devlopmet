// App.js
import React, { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  // State to track profile views
  const [viewCount, setViewCount] = useState(0);

  // Dummy user data
  const userData = {
    name: "Saniya Padwal",
    age: 22,
    bio: "An enthusiastic undergraduate in Information Technology with skills in Web Development and Software Engineering."
  };

  // Function to increment the view count
  const incrementViewCount = () => {
    setViewCount(viewCount + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Profile</h1>

      {/* Passing props to the UserProfile component */}
      <UserProfile user={userData} viewCount={viewCount} incrementViewCount={incrementViewCount} />

      <p>Total Profile Views: {viewCount}</p>
    </div>
  );
}

export default App;
