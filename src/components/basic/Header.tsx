"use client";

import { DeliveryDining } from "@mui/icons-material";

import {
  HeaderConteiner,
  LogoConteiner,
} from "@/components/basic/Header.styled.js";

import { Navigation } from "./Navigation";

const nav = [
  { label: "Shop", href: "/" },
  { label: "Cart", href: "/cart" },
  { label: "History", href: "/history" },
];

const Header = () => {
  return (
    <HeaderConteiner>
      <LogoConteiner>
        ElifTech_Delivery
        <DeliveryDining fontSize="medium" />
      </LogoConteiner>
      <Navigation navLinks={nav} />
    </HeaderConteiner>
  );
};

export { Header };
