"use client";

import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { successCallback, errorCallback } from "@/helpers/getLocation";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDrpFqonbOVosZSK8Iuz73QkF3XP2BeEdM",
  });

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const [map, setMap] = useState(null);
  const [isCenter, setIsCenter] = useState<any>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const coords = {
          lat: lat,
          lng: lng,
        };

        setIsCenter(coords);
      }, errorCallback);
    } else {
      console.log("Геолокация не поддерживается вашим браузером");
    }
  }, []);

  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={isCenter || center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
