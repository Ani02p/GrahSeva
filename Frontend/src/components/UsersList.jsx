import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/GrahSeva/users"
        );
        console.log("Fetched Users:", response.data);
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to load users. Please try again later.");
      }
    };

    fetchUsers();
  }, []);

  //   const handleEdit = (userId) => {
  //     console.log(`Editing user with ID: ${userId}`);
  //     // Implement edit functionality
  //   };

  //   const handleDelete = async (userId) => {
  //     if (window.confirm("Are you sure you want to delete this user?")) {
  //       try {
  //         await axios.delete(`http://localhost:8080/GrahSeva/users/${userId}`);
  //         setUsers(users.filter(user => user.id !== userId));
  //         console.log(`User with ID: ${userId} deleted.`);
  //       } catch (err) {
  //         console.error("Error deleting user:", err);
  //         setError("Failed to delete user. Please try again.");
  //       }
  //     }
  //   };

  return (
    <div className="users">
      <h2 className="users-section">Registered Users</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="table-container">
        <table className="users-table">
          <thead className="users-table-head">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Skill</th>
              <th>Contact Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="users-table-body">
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id || index} className="user-row">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="users-data-address">{user.address}</td>
                  <td>{user.skill}</td>
                  <td>{user.contactNo}</td>
                  <td className="action-buttons">
                    {/* <button className="users-edit-btn">Edit</button> */}
                    <button className="users-delete-btn">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-users">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
