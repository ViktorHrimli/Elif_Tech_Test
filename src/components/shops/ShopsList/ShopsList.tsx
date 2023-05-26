"use client";
import React, { useState, useEffect, useContext } from "react";
// API
import { getShop } from "@/helpers/api";
// COMPONENTS
import { Item } from "./Item";
// CONTEXT
import { ShopContext } from "@/context";

const ShopsList = () => {
  const [state, setState] = useState([]);

  const { setIsActiveShop, isActiveShop }: any = useContext(ShopContext);

  useEffect(() => {
    getShop().then((data) => {
      setState(data["0"]["shops"]);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
      }}
    >
      {state &&
        state.map((item, id) => (
          <Item key={id} setIsActive={setIsActiveShop} isActive={isActiveShop}>
            {item}
          </Item>
        ))}
    </div>
  );
};

export { ShopsList };
