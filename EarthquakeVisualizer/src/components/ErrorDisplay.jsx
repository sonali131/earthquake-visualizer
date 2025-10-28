import React from "react";
import "./ErrorDisplay.css"; // Create this CSS file for styling the error message

const ErrorDisplay = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">Error: {message}</p>
      <p>Please check your internet connection or try again later.</p>
    </div>
  );
};

export default ErrorDisplay;
