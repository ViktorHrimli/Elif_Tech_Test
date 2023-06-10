"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { HistoryItem } from "./HistoryItem";

// API
import { getAllOrder } from "@/helpers";

type ListHistoryType = {
  email: string;
  phone: string;
};

const ListHistory = ({ email, phone }: ListHistoryType) => {
  const [historyState, setHistoryState] = useState([]);

  useEffect(() => {
    getAllOrder().then((res) => {
      setHistoryState((prev: any) => prev.concat(res));
    });
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      {historyState &&
        historyState.map((item: any, id) =>
          item.email.includes(email || phone) ? (
            <HistoryItem key={id} {...item} />
          ) : (
            ""
          )
        )}
    </Box>
  );
};

export { ListHistory };
