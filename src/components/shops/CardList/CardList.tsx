"use client";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import { CardItem } from "./Card";

export interface IShop {
  _id: string;
  shop: string;
  title: string;
  description: string;
  photo: string;
  price: number;
}

import { getDataShop } from "@/helpers/api";

const CardList = (shops: any) => {
  const [state, setState] = useState<IShop[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getDataShop()
      .then(setState)
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <Box display={"grid"} gap={"15px"} gridTemplateColumns={"345px 345px"}>
      {!isLoading &&
        state.map((item: IShop) => {
          if (item.shop === "McDoDnald's") {
            return <CardItem key={item._id} {...item} />;
          }
        })}
    </Box>
  );
};

export { CardList };
