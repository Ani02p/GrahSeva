import React, { useState } from "react";
import axios from "axios";
import "../styles/AddServices.css";

const AddServices = ({ setShowAddServices, setRefreshTrigger }) => {
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleAddService = async () => {
    // Validate inputs
    if (!newService.name || !newService.description || !newService.price) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:8080/services/add", newService);
      setSuccess(true);
      setNewService({ name: "", description: "", price: "" });
      setRefreshTrigger(prev => prev + 1);
      // Close the form after a brief delay to show success message
      setTimeout(() => {
        setShowAddServices(false);
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add service");
      console.error("Error adding service:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-services">
      <div className="add-service-form">
        <div className="add-services-heading">
          <h3>Add New Service</h3>
          <p className="close-button" onClick={() => setShowAddServices(false)}>
            X
          </p>
        </div>

        {error && <p className="error-message">{error}</p>}
        {success && (
          <p className="success-message">Service added successfully!</p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={newService.name || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={newService.description || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newService.price || ""}
          onChange={handleInputChange}
        />

        <button onClick={handleAddService} disabled={loading}>
          {loading ? "Adding..." : "Add Service"}
        </button>
      </div>
    </div>
  );
};

export default AddServices;
