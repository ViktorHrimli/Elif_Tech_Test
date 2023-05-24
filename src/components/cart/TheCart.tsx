"use client";

import { useReducer } from "react";

import { Box, Button, Typography } from "@mui/material";

// LOCALS

import { CartConteiner } from "./TheCart.styled";
import { ListCart } from "./ListCart/ListCart";
import { FormCart } from "./formCart/FormCart";
// CONTEXT
import { ContextCard } from "./ContextCard";

import { reducer } from "@/helpers/reducer";

const initialState = {
  name: "",
  email: "",
  phone: "",
  adress: "",
};

const TheCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmitForm = () => {
    const key = Object.keys(state);

    key.forEach((element: any) => {
      dispatch({ type: element, payload: "" });
    });
  };
  return (
    <ContextCard.Provider value={{ state, dispatch }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridGap: "10px",
          marginTop: "25px",
          height: "600px",
          position: "relative",
        }}
      >
        <Box
          border={"1px solid blue"}
          borderRadius={"8px"}
          padding={"25px"}
          color={"blue"}
          bgcolor={"inherit"}
          fontSize={"25px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <FormCart />
        </Box>
        <CartConteiner>
          <ListCart />
        </CartConteiner>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        marginRight={"200px"}
        position={"absolute"}
        bottom={"0"}
        right={"5px"}
        gap={"50px"}
      >
        <Typography gutterBottom variant="h6" component="p">
          Total Price: {2323}
        </Typography>

        <Button variant="contained" type="submit" onClick={handleSubmitForm}>
          Submit
        </Button>
      </Box>
    </ContextCard.Provider>
  );
};

export { TheCart };
