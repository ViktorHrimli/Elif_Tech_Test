"use client";

import { useEffect, useReducer, useState, useContext } from "react";

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

type TotalPriceType = { quantity: number; price: number; title: string }[];

const TheCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [totalPrice, setTotalPrice] = useState<any>(new Map());
  const [resultPrice, setResultPrice] = useState(0);

  const { cartOrder }: any = useContext(LayoutContext);

  useEffect(() => {
    const culcTotalPrice = () => {
      totalPrice.forEach((item: any) =>
        setResultPrice((prev) => (prev += item))
      );
    };
    culcTotalPrice();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(resultPrice);

  const handleSubmitForm = async () => {
    const key = Object.keys(state);
    key.forEach((element: any) => {
      dispatch({ type: element, payload: "" });
    });

    const order = await sendOrder({ ...state, orders: cartOrder });
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
          <ListCart setTotalPrice={setTotalPrice} />
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
