import React from "react";
import "./LoadingSpinner.css"; // Create this CSS file for styling the spinner

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p>Loading earthquake data...</p>
    </div>
  );
};

export default LoadingSpinner;
