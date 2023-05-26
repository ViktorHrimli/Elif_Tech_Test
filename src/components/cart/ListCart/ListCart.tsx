"use client";
import { useContext } from "react";

import { Box } from "@mui/material";

import { CartItem } from "./Cart";

import { LayoutContext } from "@/context";

import { IShop } from "@/types";

interface IListCart {
  setTotalPrice: any;
}

const ListCart = ({ setTotalPrice }: IListCart) => {
  const { cartOrder, setCartOrder }: any = useContext(LayoutContext);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
      {cartOrder.map((item: IShop, id: number) => (
        <CartItem key={id} {...item} setTotalPrice={setTotalPrice} />
      ))}
    </Box>
  );
};

export { ListCart };
