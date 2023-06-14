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
import { BsGeoAltFill } from "react-icons/bs";
// UI
import { TextField, Box, Typography, Icon } from "@mui/material";
// LOCALS
import { FormCart } from "../cart/formCart/FormCart";
import { errorCallback } from "@/helpers";

type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];

const LIBRARIES: Libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "400px",
  gap: "20px",
};

interface IMap {
  address: string;
  setAddres: (value: string) => void;
}

function Map() {
  // USER COORDS
  const [isCenter, setIsCenter] = useState<any>(null);
  const [coordsList, setCoordsList] = useState<any>([]);
  // STATE MAP
  const [map, setMap] = useState<any>(null);
  const [directionsResponse, setDirectionsResponse] = useState<any>(null);
  // STATE RESULT
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  // STATE ADRESS
  const [addresMap, setAddresMap] = useState("");

  // REFS
  const libraries = useRef(LIBRARIES);
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef<any>();
  // INITITAL MAP
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDrpFqonbOVosZSK8Iuz73QkF3XP2BeEdM",
    libraries: libraries.current,
  });
  // OTHER
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setIsCenter({ lat, lng });
        setCoordsList([{ lat, lng }]);
      }, errorCallback);
    } else {
      prompt("Геолокация не поддерживается вашим браузером");
    }
  }, []);

  useEffect(() => {
    addresMap.length > 3 ? calculateDistanse() : "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresMap]);

  const calculateDistanse = async () => {
    const directionService = new google.maps.DirectionsService();

    const res: any = await directionService.route({
      origin: coordsList[0],
      optimizeWaypoints: true,
      unitSystem: google.maps.UnitSystem.METRIC,
      destination: { query: addresMap },
      language: "ua, ru, en",
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(res);
    setDistance(res.routes[0].legs[0].distance.text);
    setDuration(res.routes[0].legs[0].duration.text);
  };

  const handleClickMarker = (event: any) => {
    const { latLng } = event;
    const lat = latLng.lat();
    const lng = latLng.lng();

    setCoordsList([{ lat, lng }]);
    console.log("Click:", { lat, lng });
  };

  const onLoad = useCallback(
    function callback(map: any) {
      if (isCenter) {
        setMap(map);
        map.panTo(isCenter);
        map.setZoom(15);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isCenter]
  );

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Box position={"relative"} width={"100%"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={isCenter}
        options={{
          mapTypeControl: false,
          clickableIcons: true,
          zoomControl: false,
        }}
        zoom={10}
        onClick={handleClickMarker}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {coordsList.length &&
          coordsList.map((item: any, id: number) => (
            <Marker key={id} position={item}>
              <FaLocationArrow size={20} />
            </Marker>
          ))}

        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
        <BsGeoAltFill
          aria-label="center back"
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition((position: any) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                setIsCenter({ lat, lng });
              }, errorCallback);
            } else {
              prompt("Геолокация не поддерживается вашим браузером");
            }

            map.panTo(isCenter);
            map.setZoom(15);
          }}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: 10,
            bottom: 70,
            color: "black",
          }}
        />
      </GoogleMap>
      {/* <Box zIndex="1" position={"absolute"} left={0} top={0}>
        <Box flexGrow={1}>
          <Autocomplete options={{ strictBounds: true }}>
            <TextField
              type="text"
              variant="filled"
              placeholder="Adress"
              ref={destiantionRef}
              sx={{ position: "relative" }}
              onBlur={(e) => setAddresMap(e.target.value)}
            />
          </Autocomplete>
          <AiOutlineSearch
            onClick={() => (addresMap.length > 3 ? calculateDistanse() : null)}
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
      </Box> */}

      <Box position={"absolute"} right={30} top={415}>
        <Typography>Distance: {distance} </Typography>
        <Typography>Duration: {duration} </Typography>
      </Box>

      <FormCart
        AutoComlpete={Autocomplete}
        setRef={destiantionRef}
        setAddresMap={setAddresMap}
      />
    </Box>
  ) : (
    <p>...Loading</p>
  );
}

export default React.memo(Map);
