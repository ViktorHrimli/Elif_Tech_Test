"use client";

import Link from "next/link";
import React from "react";

import { Container } from "@mui/material";

import {
  HeaderConteiner,
  Navigation,
} from "@/components/basic/Header.styled.js";

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderConteiner>
      <Navigation>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </Navigation>
    </HeaderConteiner>
  );
};

export { Header };
