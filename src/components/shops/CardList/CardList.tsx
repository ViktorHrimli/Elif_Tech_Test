"use client";
import { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";

import { CardItem } from "./Card";

import { getDataShop } from "@/helpers";
import { LayoutContext } from "@/context";

import { IShop } from "@/types";

const CardList = ({ isActive }: { isActive: string }) => {
  const [state, setState] = useState<IShop[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setCartOrder }: any = useContext(LayoutContext);

  useEffect(() => {
    getDataShop()
      .then(setState)
      .finally(() => setIsLoading(true));
  }, []);

  return (
    <Box display={"grid"} gap={"15px"} gridTemplateColumns={"345px 345px"}>
      {isLoading ? (
        state.map((item: IShop) => {
          if (item.shop.toLowerCase() === isActive) {
            return <CardItem key={item._id} {...item} setCart={setCartOrder} />;
          }

          if (isActive === "") {
            return <CardItem key={item._id} {...item} setCart={setCartOrder} />;
          }
        })
      ) : (
        <div>...Loading</div>
      )}
    </Box>
  );
};

export { CardList };
