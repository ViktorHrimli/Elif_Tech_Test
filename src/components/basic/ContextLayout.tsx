"use client";

import React, { useState } from "react";

import { LayoutContext } from "@/context";

import { LayoutType } from "@/types";

const ContextLayout = ({ children }: LayoutType) => {
  const [cartOrder, setCartOrder] = useState([]);
  return (
    <LayoutContext.Provider value={{ cartOrder, setCartOrder }}>
      {children}
    </LayoutContext.Provider>
  );
};
export { ContextLayout };
