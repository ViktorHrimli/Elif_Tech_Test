"use client";

import Link from "next/link";

import { DeliveryDining } from "@mui/icons-material";

import {
  HeaderConteiner,
  Navigation,
  LogoConteiner,
} from "@/components/basic/Header.styled.js";

const Header = () => {
  return (
    <HeaderConteiner>
      <LogoConteiner>
        ElifTech_Delivery
        <DeliveryDining fontSize="medium" />
      </LogoConteiner>
      <Navigation>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </Navigation>
    </HeaderConteiner>
  );
};

export { Header };
