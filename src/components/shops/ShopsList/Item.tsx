import { Button } from "@mui/material";

import { ItemsConteiner } from "./Item.styled";

const Item = () => {
  return (
    <ItemsConteiner>
      <Button color="primary" variant="contained" size="medium">
        MacDodnalds
      </Button>
    </ItemsConteiner>
  );
};

export { Item };
