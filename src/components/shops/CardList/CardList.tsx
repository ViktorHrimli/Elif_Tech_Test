import { CardItem } from "./Card";

import { Box } from "@mui/material";

const CardList = () => {
  return (
    <Box display={"grid"} gap={"15px"} gridTemplateColumns={"345px 345px"}>
      {Array.from({ length: 10 }).map((item, id) => (
        <CardItem key={id} />
      ))}
    </Box>
  );
};

export { CardList };
