"use client";

import React, { useEffect, useState } from "react";
// CONTEXT
import { LayoutContext } from "@/context";
// TYPES
import { LayoutType } from "@/types";
// HELPERS
import { setValueLocalStorage, getValueLocalStorage } from "@/helpers";

const ContextLayout = ({ children }: LayoutType) => {
  const [cartOrder, setCartOrder] = useState<any>(() => {
    return getValueLocalStorage("cartOrder") || [];
  });

  useEffect(() => {
    setValueLocalStorage("cartOrder", cartOrder);
  }, [cartOrder]);

  return (
    <LayoutContext.Provider value={{ cartOrder, setCartOrder }}>
      {children}
    </LayoutContext.Provider>
  );
};
export { ContextLayout };
