"use client";

import { Box } from "@mui/material";
import { Item } from "./Item";

const HistoryItem = (props: any) => {
  const { orders } = props;

  return (
    <Box display={"flex"} gap={"20px"}>
      {orders.map((item: any, id: number) => (
        <Item key={id} {...item} />
      ))}
    </Box>
  );
};
export { HistoryItem };
