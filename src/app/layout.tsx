"use client";

import { useState } from "react";
import { Metadata } from "next";

import "./globals.css";
import { Roboto_Mono } from "next/font/google";

// STYLES
import { Box } from "@mui/material";

// LOCALS IMPORT
import { Header } from "@/components/basic/Header";
import { Footer } from "@/components/basic/Footer";

// CONTEXT

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivery App",
  description: "Test great company Elif Tech :)",
};

type LayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <Box component={"main"} padding={"40px"}>
          {children}
        </Box>

        <Footer />
      </body>
    </html>
  );
}
