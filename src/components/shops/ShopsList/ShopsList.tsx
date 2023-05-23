import React from "react";

import { Item } from "./Item";

const ShopsList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
      }}
    >
      {Array.from({ length: 5 }, (_, id) => (
        <Item key={id}></Item>
      ))}
    </div>
  );
};

export { ShopsList };
