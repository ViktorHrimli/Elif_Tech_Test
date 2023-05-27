"use client";

import { Item } from "./item";

const HistoryItem = (props: any) => {
  const { orders } = props;

  return (
    <div>
      {orders.map((item: any, id: number) => (
        <Item key={id} {...item} />
      ))}
    </div>
  );
};
export { HistoryItem };
