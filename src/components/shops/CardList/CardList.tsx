"use client";
import { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";

import { CardItem } from "./Card";

import { getDataShop } from "@/helpers/api";

export interface IShop {
  _id: string;
  shop: string;
  title: string;
  description: string;
  photo: string;
  price: number;
}

const CardList = ({ isActive }: { isActive: string }) => {
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
          if (item.shop.toLowerCase() === isActive) {
            return <CardItem key={item._id} {...item} />;
          }

          if (isActive === "") {
            return <CardItem key={item._id} {...item} />;
          }
        })}
    </Box>
  );
};

export { CardList };
