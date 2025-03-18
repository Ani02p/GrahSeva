import React, { useEffect, useState } from "react";
import "../styles/Services.css"; // Import CSS file
import AddServices from "./AddServices";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [showAddServices, setShowAddServices] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Fetch all services from the backend
  const allServices = async () => {
    try {
      const response = await axios.get("http://localhost:8080/services/all");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  // Function to delete a service
  const handleServiceDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/services/delete/${id}`);
      // Instead of filtering the state directly, trigger a refresh
      setRefreshTrigger(prev => prev + 1);
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  useEffect(() => {
    allServices();
  }, [refreshTrigger]); // Re-fetch services when refreshTrigger changes

  return (
    <div className="services-container">
      {showAddServices && (
        <AddServices setShowAddServices={setShowAddServices} setRefreshTrigger={setRefreshTrigger} />
      )}

      <h2>Manage Services</h2>

      <button onClick={() => setShowAddServices(true)}>Add Services</button>

      <table className="services-table">
        <thead>
          <tr>
            <td>Service Name</td>
            <td>Category</td>
            <td>Price</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
              <td className="action-buttons">
                <button className="users-edit-btn">Edit</button>
                <button
                  className="users-delete-btn"
                  onClick={() => handleServiceDelete(service.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;