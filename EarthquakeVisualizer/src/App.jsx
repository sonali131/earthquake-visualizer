import React, { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorDisplay from "./components/ErrorDisplay";
import "./App.css"; // Import your main CSS file

function App() {
  const [earthquakeData, setEarthquakeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const response = await fetch(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEarthquakeData(data.features);
      } catch (err) {
        console.error("Failed to fetch earthquake data:", err);
        setError("Failed to load earthquake data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEarthquakeData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="App">
      <header className="App-header">
        <h1>Global Earthquake Visualizer (Last 24 Hours)</h1>
      </header>
      <main className="App-main">
        {loading && <LoadingSpinner />}
        {error && <ErrorDisplay message={error} />}
        {!loading && !error && earthquakeData && (
          <MapComponent earthquakeData={earthquakeData} />
        )}
        {!loading &&
          !error &&
          (!earthquakeData || earthquakeData.length === 0) && (
            <p className="no-data-message">
              No earthquake data available for the last 24 hours.
            </p>
          )}
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Earthquake Visualizer. Data from USGS.</p>
      </footer>
    </div>
  );
}

export default App;
