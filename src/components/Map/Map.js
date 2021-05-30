import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
//import L, { Marker, Popup } from "leaflet";
import "./Map.css";
import { showDataOnMap } from "../../util";

function Map({ countries, casesType, center, zoom }) {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  

  return (
    <MapContainer 
      casesType={casesType}
      className="map"
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
     >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">Open Street-Map</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showDataOnMap(countries, casesType)}
    
      
    </MapContainer>
  );
}

export default Map;
