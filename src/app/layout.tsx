"use client";

import "./globals.css";
import { Roboto_Mono } from "next/font/google";

// STYLES
import { Box } from "@mui/material";

// LOCALS IMPORT
import { Header } from "@/components/basic/Header";
import { Footer } from "@/components/basic/Footer";
import { ContextLayout } from "@/components/basic/ContextLayout";
import { HTML } from "@/components/basic/HTML";
// TYPES
import { LayoutType } from "@/types";

const inter = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }: LayoutType) {
  return (
    <HTML>
      <body className={inter.className}>
        <Header />
        <ContextLayout>
          <Box component={"main"} padding={"40px"}>
            {children}
          </Box>
        </ContextLayout>
        <Footer />
      </body>
    </HTML>
  );
}
