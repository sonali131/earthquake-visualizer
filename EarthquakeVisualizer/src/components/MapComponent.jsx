import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS
import "./MapComponent.css"; // CORRECT relative path (for file in the same directory) // For custom marker styling if needed

// Import Leaflet default marker images directly
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Fix for default Leaflet icons not appearing in Webpack bundles
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl, // Use the imported URL
  iconUrl, // Use the imported URL
  shadowUrl, // Use the imported URL
});
// --- FIX END ---

const MapComponent = ({ earthquakeData }) => {
  // Function to determine marker color based on magnitude
  const getMarkerColor = (magnitude) => {
    if (magnitude >= 6) return "red";
    if (magnitude >= 5) return "orange";
    if (magnitude >= 4) return "yellow";
    if (magnitude >= 3) return "greenyellow";
    return "green";
  };

  // Function to create a custom div icon
  const createCustomMarkerIcon = (magnitude) => {
    const color = getMarkerColor(magnitude);
    const size = Math.max(8, magnitude * 3); // Scale size based on magnitude, min 8px
    const opacity = Math.min(1, 0.5 + magnitude * 0.1); // Slightly increase opacity with magnitude

    return L.divIcon({
      className: "custom-div-icon", // Use this class for styling if needed
      html: `<div style="background-color: ${color}; width: ${size}px; height: ${size}px; border-radius: 50%; opacity: ${opacity}; border: 1px solid white;"></div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2], // Center the icon
    });
  };

  return (
    <MapContainer
      center={[0, 0]} // Initial center of the map (global view)
      zoom={2} // Initial zoom level
      scrollWheelZoom={true} // Enable scroll zoom
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &mdash; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />

      {earthquakeData.map((earthquake) => {
        const { geometry, properties, id } = earthquake;
        const [longitude, latitude] = geometry.coordinates;
        const magnitude = properties.mag;
        const place = properties.place;
        const time = new Date(properties.time).toLocaleString();
        const url = properties.url;

        // Skip rendering if magnitude is null or coordinates are invalid
        if (magnitude === null || !latitude || !longitude) {
          return null;
        }

        return (
          <Marker
            key={id}
            position={[latitude, longitude]}
            icon={createCustomMarkerIcon(magnitude)}
          >
            <Popup>
              <b>Magnitude: {magnitude}</b>
              <br />
              Location: {place}
              <br />
              Time: {time}
              <br />
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  More Info
                </a>
              )}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
