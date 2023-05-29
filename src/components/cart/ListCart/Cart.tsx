"use client";

import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Button,
} from "@mui/material";

import { IShop } from "@/types";

interface ICartItem extends IShop {
  setTotalPrice: any;
  onDelete: (id: string) => void;
  setIsReload: any;
}

interface ITotalPriceObj {
  quality: number;
  title: string;
  countPrice: number;
}

const CartItem = ({
  photo,
  price,
  shop,
  title,
  _id,
  onDelete,
  setIsReload,
  setTotalPrice,
}: ICartItem) => {
  const [quality, setQuality] = useState(1);
  const [countPrice, setCountPrice] = useState(price);

  useEffect(() => {
    setTotalPrice((prev: any) =>
      prev.set(title, { countPrice, quality, action: 1 })
    );
  }, []);

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
            gap: "20px",
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
            {countPrice.toFixed(2)}
          </Typography>

          <Box display={"flex"} gap={"8px"} justifyContent={"center"}>
            <button
              type="button"
              disabled={quality === 1}
              onClick={() => {
                setQuality((quant) => --quant);

                setCountPrice(countPrice - price);

                setTotalPrice((prev: any) =>
                  prev.set(title, { countPrice, quality, action: 0 })
                );

                setIsReload((prev: boolean) => !prev);
              }}
            >
              -
            </button>

            {quality}
            <button
              type="button"
              onClick={() => {
                setQuality((quant) => ++quant);

                setCountPrice(countPrice + price);

                setTotalPrice((prev: any) =>
                  prev.set(title, { countPrice, quality, action: 1 })
                );

                setIsReload((prev: boolean) => !prev);
              }}
            >
              +
            </button>
          </Box>

          <Button
            type="button"
            variant="contained"
            size="small"
            onClick={() => onDelete(_id)}
          >
            Delete
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};
export { CartItem };
