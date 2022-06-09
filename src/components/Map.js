import React from "react";
import { MapContainer, Marker, TileLayer, useMap, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const position = [14.550311, 101.805717];

  const styles = {
    map: {
      position: "absolute",
      top: 5,
      left: 5,
      right: 5,
      bottom: 5,
    },
  };

  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={true}
      style={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>TEST</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
