"use client";

import { useContext, useReducer } from "react";

import { TextField, Box } from "@mui/material";

// CONTEXT
import { ContextCard } from "@/context";

const FormCart = () => {
  const { state, dispatch }: any = useContext(ContextCard);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"start"}
      justifyContent={"center"}
      gap={"20px"}
      width={"100%"}
    >
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={state.name}
        sx={{ width: "70%" }}
        required
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      />

      <TextField
        id="email"
        label="Email"
        variant="outlined"
        sx={{ width: "70%" }}
        value={state.email}
        required
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
      />
      <TextField
        id="phone"
        label="Phone"
        variant="outlined"
        sx={{ width: "70%" }}
        value={state.phone}
        onChange={(e) => dispatch({ type: "phone", payload: e.target.value })}
        required
      />
      <TextField
        id="adress"
        label="Adress"
        variant="outlined"
        sx={{ width: "70%" }}
        onChange={(e) => dispatch({ type: "adress", payload: e.target.value })}
        value={state.adress}
        required
      />
    </Box>
  );
};

export { FormCart };
