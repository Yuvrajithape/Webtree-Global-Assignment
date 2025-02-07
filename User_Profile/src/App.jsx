import React, { useState, useEffect } from "react";
import ProfileCard from "./Components/ProfileCard";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then(response => response.json())
      .then(data => {
        setUser(data.results[0]);  // Store the first user result in state
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {user ? <ProfileCard user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
