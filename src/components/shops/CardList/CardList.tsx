"use client";
import { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";

import { CardItem } from "./Card";

import { getDataShop } from "@/helpers";
import { LayoutContext } from "@/context";

import { IShop } from "@/types";

const CardList = ({ isActive }: { isActive: string }) => {
  const [shops, setShops] = useState<IShop[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setCartOrder }: any = useContext(LayoutContext);

  useEffect(() => {
    getDataShop()
      .then(setShops)
      .finally(() => setIsLoading(true));
  }, []);

  return (
    <Box display={"grid"} gap={"15px"} gridTemplateColumns={"345px 345px"}>
      {isLoading ? (
        shops.map((item: IShop) => {
          var IsEqualActiveShop = item.shop.toLowerCase() === isActive;

          if (!isActive || IsEqualActiveShop) {
            return <CardItem key={item._id} {...item} setCart={setCartOrder} />;
          }
        })
      ) : (
        <div>...Loading used free services (:</div>
      )}
    </Box>
  );
};

export { CardList };
