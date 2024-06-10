import React from "react";
import "../styles/UserCard.css"; // Add styling for the user card

const UserCard = ({ user, onClose }) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <h2>User Details</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="user-card-content">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        
      </div>
    </div>
  );
};

export default UserCard;
