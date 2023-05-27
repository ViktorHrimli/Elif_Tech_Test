"use client";

import { useEffect, useState } from "react";

import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";

import { IShop } from "@/types";

interface ICartItem extends IShop {
  setTotalPrice: any;
}

const CartItem = ({
  photo,
  price,
  shop,
  title,
  _id,
  setTotalPrice,
}: ICartItem) => {
  const [quality, setQuality] = useState(1);
  const [countPrice, setCountPrice] = useState(price);

  useEffect(() => {
    setTotalPrice((prev: any) => prev.set(title, countPrice));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countPrice, quality]);

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
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {shop}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price:
            {countPrice.toFixed(2)}
          </Typography>

          <Box display={"flex"} gap={"8px"} justifyContent={"center"}>
            <button
              type="button"
              disabled={quality === 1}
              onClick={() =>
                setQuality((quant) => {
                  setCountPrice(countPrice - price);
                  setTotalPrice((prev: any) => prev.set(title, countPrice));
                  return --quant;
                })
              }
            >
              -
            </button>

            {quality}
            <button
              type="button"
              onClick={() =>
                setQuality((quant) => {
                  setCountPrice(countPrice + price);
                  setTotalPrice((prev: any) => prev.set(title, countPrice));
                  return ++quant;
                })
              }
            >
              +
            </button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
export { CartItem };
