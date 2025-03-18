import React, { useEffect, useState } from "react";

const availableServices = ["Plumbing", "Electrician", "Cleaning", "Carpentry", "Painting"];

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showServicesList, setShowServicesList] = useState(false);

  // Filter services based on search query
  const filteredServices = availableServices.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceSelect = (service) => {
    setSearchQuery(service);
    setShowServicesList(false);
  };

  // Function to get user's current location
  const getCurrentLocation = () => {
    setIsLoadingLocation(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchLocationName(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoadingLocation(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setIsLoadingLocation(false);
    }
  };

  const fetchLocationName = async (latitude, longitude) => {
    const lat = latitude.toFixed(4);
    const lon = longitude.toFixed(4);
    setLocation(`${lat}, ${lon}`); // Set initial coordinates

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();

      if (data.address) {
        const { road, suburb, city, county, state, postcode, country } = data.address;
        const formattedAddress = `${road ? road + ", " : ""}${suburb ? suburb + ", " : ""}${city ? city + ", " : ""}${county ? county + ", " : ""}${state ? state + " - " : ""}${postcode ? postcode + ", " : ""}${country}`;
        setLocation(formattedAddress);
      } else {
        console.error("Location name not found");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
    }

    setIsLoadingLocation(false);
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showServicesList && !event.target.closest(".service-search-wrapper")) {
        setShowServicesList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showServicesList]);

  return (
    <div>
      {/* Search Section */}
      <div className="search-container">
        <div className="search-inputs">
          {/* Services Search with Dropdown */}
          <div className="service-search-wrapper">
            <input
              type="text"
              placeholder="What service do you need?"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowServicesList(true);
              }}
              onFocus={() => setShowServicesList(true)}
            />
            {showServicesList && (
              <div className="services-dropdown">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service, index) => (
                    <div key={index} className="service-option" onClick={() => handleServiceSelect(service)}>
                      {service}
                    </div>
                  ))
                ) : (
                  <div className="no-services">No matching services found</div>
                )}
              </div>
            )}
          </div>

          {/* Location input with auto-detect */}
          <div className="location-search-wrapper">
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="location-detect-btn" onClick={getCurrentLocation} disabled={isLoadingLocation} title="Detect my location">
              {isLoadingLocation ? "..." : "📍"}
            </button>
          </div>
        </div>

        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default HomePage;
