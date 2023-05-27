import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery App",
  description: "Test great company Elif Tech :)",
};

import React from "react";

import { LayoutType } from "@/types";

const HTML = ({ children }: LayoutType) => {
  return <html lang="en">{children}</html>;
};

export { HTML };
