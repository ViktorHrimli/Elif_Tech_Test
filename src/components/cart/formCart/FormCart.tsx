"use client";

import { useContext, useState, useRef } from "react";

import { TextField, Box } from "@mui/material";
// LOCALS
import Map from "../../map/Map";
// CONTEXT
import { ContextCard } from "@/context";

const FormCart = ({
  AutoComlpete,
  setRef,
  setAddresMap,
}: {
  AutoComlpete: any;
  setRef: any;
  setAddresMap: any;
}) => {
  const { state, dispatch }: any = useContext(ContextCard);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"start"}
      justifyContent={"center"}
      gap={"20px"}
      marginTop={"50px"}
      width={"100%"}
    >
      <AutoComlpete options={{ strictBounds: true }}>
        <TextField
          id="adress"
          label="Adress"
          type="text"
          variant="outlined"
          sx={{ width: "461px" }}
          ref={setRef}
          onChange={(e) => {
            dispatch({ type: "adress", payload: e.target.value });
          }}
          onBlur={(e) => {
            setAddresMap(e.target.value);
            dispatch({ type: "adress", payload: e.target.value });
          }}
          value={state.adress}
          required
        />
      </AutoComlpete>
      <TextField
        id="name"
        label="Name"
        type="text"
        variant="outlined"
        value={state.name}
        sx={{ width: "70%" }}
        required
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      />

      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        sx={{ width: "70%" }}
        value={state.email}
        required
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
      />
      <TextField
        id="phone"
        label="Phone"
        type="text"
        variant="outlined"
        sx={{ width: "70%" }}
        value={state.phone}
        onChange={(e) => dispatch({ type: "phone", payload: e.target.value })}
        required
      />
    </Box>
  );
};

export { FormCart };
