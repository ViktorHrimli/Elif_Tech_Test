"use client";

import { Box, Container } from "@mui/material";

// LOCALS
import { ShopsList } from "./ShopsList/ShopsList";
import { CardList } from "./CardList/CardList";
import { ShopContent } from "./TheShop.styled";

const TheShop = () => {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "30% auto",
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
        Shops:
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"20px"}
          padding={"5px"}
          marginTop={"25px"}
        >
          <ShopsList />
        </Box>
      </Box>
      <ShopContent>
        <CardList />
      </ShopContent>
    </Container>
  );
};

export { TheShop };
