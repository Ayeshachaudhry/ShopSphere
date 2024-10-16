import React, { useContext, useState } from "react";
import UserForm from "./UserForm"; // Import UserForm
import { UserContext } from "../UserContext"; // Import UserContext

const UserManagement = () => {
  const { users, deleteUser } = useContext(UserContext); // Access user data from context
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to handle user deletion
  const handleDelete = async (userId) => {
    setLoading(true);
    try {
      await deleteUser(userId); // Assuming deleteUser is a function in UserContext
    } catch (err) {
      setError("Failed to delete user. Please try again."); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-management">
      <h3>User Management</h3>
      <UserForm /> {/* Include UserForm for adding new users */}
      {loading && <p>Loading...</p>} {/* Show loading state */}
      {error && <p className="error-message">{error}</p>} {/* Show error message */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th> {/* Add actions column for deleting users */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)} className="delete-button">Delete</button> {/* Delete button */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
