"use client";

import React, { useEffect, useState } from "react";

import { LayoutContext } from "@/context";

import { LayoutType } from "@/types";

const ContextLayout = ({ children }: LayoutType) => {
  const [cartOrder, setCartOrder] = useState(() => {
    return JSON.parse(localStorage.getItem("cartOrder")!) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartOrder", JSON.stringify(cartOrder));
  }, [cartOrder]);

  return (
    <LayoutContext.Provider value={{ cartOrder, setCartOrder }}>
      {children}
    </LayoutContext.Provider>
  );
};
export { ContextLayout };
