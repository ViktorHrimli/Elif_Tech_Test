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
  title: string;
  countPrice: number;
}

const TheCart = () => {
  // LOCAL STORAGE INITITAL
  let storage;
  try {
    storage = JSON.parse(localStorage.getItem("state")!) || initialState;
  } catch (error) {}
  // STATE FORM AND TOTAL PRICE
  const [state, dispatch] = useReducer(reducer, storage || initialState);
  const [totalPrice, setTotalPrice] = useState<any>([]);
  const [resultPrice, setResultPrice] = useState(0);
  // CONTEXT
  const { cartOrder, setCartOrder }: any = useContext(LayoutContext);

  useEffect(() => {
    let res = totalPrice.reduce(
      (total: number, item: ICountPrice) => item.countPrice + total,
      0
    );

    setResultPrice(res);
  }, [totalPrice]);

  useEffect(() => {}, []);

  const eventCulcTotalPrice = {
    increment: (item: ICountPrice) => {
      const findIndex = cartOrder.findIndex(
        (elem: any) => elem.title === item.title
      );

      setTotalPrice((prev: any) =>
        prev.map((ele: any, id: number) =>
          id === findIndex ? (ele = item) : ele
        )
      );
    },
    decrement: (item: ICountPrice) => {
      const findIndex = cartOrder.findIndex(
        (elem: any) => elem.title === item.title
      );

      setTotalPrice((prev: any) =>
        prev.map((ele: any, id: number) =>
          id === findIndex ? (ele = item) : ele
        )
      );
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

  const handleSubmitForm = () => {
    const key = Object.keys(state);
    key.forEach((element: any) => {
      dispatch({ type: element, payload: "" });
    });

    setCartOrder([]);

    // LOCAL STORAGE
    localStorage.removeItem("cartOrder");
    localStorage.removeItem("state");

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

          <Button
            variant="contained"
            type="submit"
            disabled={
              state.name && state.email && state.adress && state.phone
                ? false
                : true
            }
            onClick={handleSubmitForm}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </ContextCard.Provider>
  );
};

export { TheCart };
