"use client";
import { useContext, useEffect, useState } from "react";

import { Box } from "@mui/material";

import { CartItem } from "./Cart";

import { LayoutContext } from "@/context";

import { IShop } from "@/types";

interface IListCart {
  eventCulcTotalPrice: any;
}

const ListCart = ({ eventCulcTotalPrice }: IListCart) => {
  const { cartOrder, setCartOrder }: any = useContext(LayoutContext);

  const handleDeleteCart = (id: string) => {
    setCartOrder((prev: any) => prev.filter((item: any) => item._id !== id));
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
      {cartOrder.map((item: IShop, id: number) => (
        <CartItem
          key={id}
          {...item}
          onDelete={handleDeleteCart}
          eventCulcTotalPrice={eventCulcTotalPrice}
        />
      ))}
    </Box>
  );
};

export { ListCart };
