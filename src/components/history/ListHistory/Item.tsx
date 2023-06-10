"use client";

import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";

import { IShop } from "@/types";

const Item = ({ photo, price, title, shop }: IShop) => {
  return (
    <Card
      sx={{
        width: "600px",
        height: "270px",
        backgroundColor: "inherit",
        padding: "20px",
      }}
    >
      <Box display={"flex"}>
        <CardMedia image={photo} sx={{ height: "200px", width: "70%" }} />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <Typography gutterBottom variant="body2" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {shop}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Price:
            {price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export { Item };
