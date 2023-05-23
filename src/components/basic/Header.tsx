"use client";

import Link from "next/link";
import React from "react";

import { DeliveryDining } from "@mui/icons-material";

import {
  HeaderConteiner,
  Navigation,
  LogoConteiner,
} from "@/components/basic/Header.styled.js";

type Props = {};

const Header = (props: Props) => {
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
