"use client";
import { Metadata } from "next";

import "./globals.css";
import { Roboto_Mono } from "next/font/google";

// STYLES
import { Box } from "@mui/material";

// LOCALS IMPORT
import { Header } from "@/components/basic/Header";
import { Footer } from "@/components/basic/Footer";
import { ContextLayout } from "@/components/basic/ContextLayout";
// TYPES
import { LayoutType } from "@/types";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivery App",
  description: "Test great company Elif Tech :)",
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ContextLayout>
          <Box component={"main"} padding={"40px"}>
            {children}
          </Box>
        </ContextLayout>
        <Footer />
      </body>
    </html>
  );
}
