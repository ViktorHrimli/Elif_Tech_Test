"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
// GOOGLE MAPS API
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";
// ICONS
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
// UI
import { TextField, Box, Typography, Icon } from "@mui/material";
// LOCALS
import { errorCallback } from "@/helpers/getLocation";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map({
  address,
  setAddres,
}: {
  address: string;
  setAddres: (value: string) => void;
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDrpFqonbOVosZSK8Iuz73QkF3XP2BeEdM",
    libraries: ["places"],
  });

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const [isCenter, setIsCenter] = useState<any>(null);

  const [map, setMap] = useState<any>(null);
  const [directionsResponse, setDirectionsResponse] = useState<any>(null);

  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef<any>();

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
      prompt("Геолокация не поддерживается вашим браузером");
    }
  }, []);

  console.log(address);

  const calculateDistanse = async () => {
    const directionService = new google.maps.DirectionsService();

    const res: any = await directionService.route({
      origin: isCenter,
      optimizeWaypoints: true,
      unitSystem: google.maps.UnitSystem.METRIC,
      destination: { query: address },
      language: "ua, ru, en",
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(res);
    setDistance(res.routes[0].legs[0].distance.text);
    setDuration(res.routes[0].legs[0].duration.text);
  };

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    destiantionRef.current.value = "";
  }

  const onLoad = useCallback(
    function callback(map: any) {
      setMap(map);
      map.panTo(isCenter);
      map.setZoom(15);
    },
    [isCenter]
  );

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Box position={"relative"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={isCenter || center}
        options={{
          mapTypeControl: false,
          clickableIcons: true,
          zoomControl: false,
        }}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={isCenter} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
      <Box zIndex="1" position={"absolute"} left={0} top={0}>
        <Box flexGrow={1}>
          <Autocomplete>
            <TextField
              type="text"
              variant="filled"
              placeholder="Destination"
              ref={destiantionRef}
              sx={{ position: "relative" }}
              onBlur={(e) => setAddres(e.target.value)}
            />
          </Autocomplete>
          <AiOutlineSearch
            onClick={calculateDistanse}
            width={20}
            height={20}
            color="black"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>

      <Box position={"absolute"} left={10} top={300}>
        <Typography>Distance: {distance} </Typography>
        <Typography>Duration: {duration} </Typography>
        <button
          aria-label="center back"
          onClick={() => {
            map.panTo(isCenter);
            map.setZoom(15);
          }}
        >
          <FaLocationArrow />
        </button>
      </Box>
    </Box>
  ) : (
    <p>...Loading</p>
  );
}

export default React.memo(Map);
