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
  onDelete: (id: string) => void;
  eventCulcTotalPrice: any;
}

const CartItem = ({
  photo,
  price,
  shop,
  title,
  _id,
  onDelete,
  eventCulcTotalPrice,
}: ICartItem) => {
  const [quality, setQuality] = useState(1);
  const [countPrice, setCountPrice] = useState(price);

  useEffect(() => {
    eventCulcTotalPrice.firstRender({ title, countPrice });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

                const totalPrice = countPrice - price;

                setCountPrice(totalPrice);

                eventCulcTotalPrice.decrement({
                  title,
                  countPrice: totalPrice,
                });
              }}
            >
              -
            </button>

            {quality}
            <button
              type="button"
              onClick={() => {
                setQuality((quant) => ++quant);

                const totalPrice = countPrice + price;

                setCountPrice(totalPrice);

                eventCulcTotalPrice.increment({
                  title,
                  countPrice: totalPrice,
                });
              }}
            >
              +
            </button>
          </Box>

          <Button
            type="button"
            variant="contained"
            size="small"
            onClick={() => {
              onDelete(_id);
              eventCulcTotalPrice.deleteCard(title);
            }}
          >
            Delete
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};
export { CartItem };
