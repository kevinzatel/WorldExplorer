import React, { FC } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface IProps {
  lat: number;
  lng: number;
}

const Map: FC<IProps> = ({ lat, lng }) => {
  const containerStyle = {
    height: "450px",
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_KEY!}>
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
