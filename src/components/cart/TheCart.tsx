"use client";

import { useEffect, useReducer, useState, useContext, useRef } from "react";

import { Box, Button, Typography } from "@mui/material";

// LOCALS
import { CartConteiner } from "./TheCart.styled";
import { ListCart } from "./ListCart/ListCart";
import { FormCart } from "./formCart/FormCart";
// CONTEXT
import { ContextCard } from "@/context";
import { LayoutContext } from "@/context";
// HELPERS
import { reducer } from "@/helpers/reducer";
// API
import { sendOrder } from "@/helpers/api";

const initialState = {
  name: "",
  email: "",
  phone: "",
  adress: "",
};

interface ICountPrice {
  price: number;
  title: string;
  count: number;
}

const middle: any = [];

const TheCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [totalPrice, setTotalPrice] = useState<any>([]);

  const [resultPrice, setResultPrice] = useState(0);

  const { cartOrder, setCartOrder }: any = useContext(LayoutContext);

  const eventCulcTotalPrice = {
    increment: (item: ICountPrice) => {
      const findIndex = cartOrder.findIndex(
        (elem: any) => elem.title === item.title
      );

      middle.push(item);

      setTotalPrice([...middle]);
    },
    decrement: (item: ICountPrice) => {
      const findIndex = cartOrder.findIndex(
        (elem: any) => elem.title === item.title
      );

      middle.splice(findIndex, 1);

      setTotalPrice([...middle]);
    },

    firstRender: (item: ICountPrice) => {
      setTotalPrice((prev: any) => prev.concat(item));
    },

    deleteCard: (title: string) => {
      setTotalPrice((prev: any) =>
        prev.filter((item: any) => item.title !== title)
      );
    },
  };
  console.log(totalPrice);

  useEffect(() => {
    let res = totalPrice.reduce(
      (total: number, item: ICountPrice) => item.price + total,
      0
    );

    setResultPrice(res);
  }, [totalPrice]);

  const handleSubmitForm = async () => {
    const key = Object.keys(state);
    key.forEach((element: any) => {
      dispatch({ type: element, payload: "" });
    });
    setCartOrder([]);
    // SEND
    sendOrder({ ...state, orders: cartOrder });
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
          <ListCart eventCulcTotalPrice={eventCulcTotalPrice} />
        </CartConteiner>
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
            Total Price: {resultPrice.toFixed(2)}
          </Typography>

          <Button variant="contained" type="submit" onClick={handleSubmitForm}>
            Submit
          </Button>
        </Box>
      </Box>
    </ContextCard.Provider>
  );
};

export { TheCart };
