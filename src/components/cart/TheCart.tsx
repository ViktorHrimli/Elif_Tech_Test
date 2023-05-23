"use client";

import { Box, Container } from "@mui/material";

// LOCALS

import { CartConteiner } from "./TheCart.styled";
import { ListCart } from "./ListCart/ListCart";

const TheCart = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "50% auto",
        gridGap: "10px",
        marginTop: "25px",
        height: "600px",
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
        First Row
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"20px"}
          padding={"5px"}
          marginTop={"25px"}
        ></Box>
      </Box>
      <CartConteiner>
        <ListCart />
      </CartConteiner>
    </Box>
  );
};

export { TheCart };
