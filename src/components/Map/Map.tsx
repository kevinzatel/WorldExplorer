import React, { FC } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { mapsKey } from "../../credentials/credentials";

interface IProps {
  lat: number;
  lng: number;
}

const Map: FC<IProps> = ({ lat, lng }) => {
  const containerStyle = {
    height: "450px",
  };

  return (
    <LoadScript googleMapsApiKey={mapsKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={6}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
