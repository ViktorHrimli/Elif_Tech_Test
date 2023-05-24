import { CartItem } from "./Cart";

import { Box } from "@mui/material";

const ListCart = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
      {Array.from({ length: 3 }).map((_, id) => (
        <CartItem key={id} />
      ))}
    </Box>
  );
};

export { ListCart };
