"use client";

import { useEffect, useState } from "react";

// API
import { getAllOrder } from "@/helpers/api";

import { HistoryItem } from "./HistoryItem";

const ListHistory = ({}) => {
  const [historyState, setHistoryState] = useState([]);

  useEffect(() => {
    getAllOrder().then((res) => {
      setHistoryState((prev: any) => prev.concat(res));
    });
  }, []);

  return (
    <div>
      {historyState &&
        historyState.map((item: any, id) => {
          return <HistoryItem key={id} {...item} />;
        })}
    </div>
  );
};

export { ListHistory };
