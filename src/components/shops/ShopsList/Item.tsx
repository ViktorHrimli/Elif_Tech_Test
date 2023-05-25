import { Button } from "@mui/material";

import { ItemsConteiner } from "./Item.styled";

interface IItemProps {
  children: string;
  setIsActive: (value: string) => void;
  isActive: string;
}

const Item = ({ children, setIsActive, isActive }: IItemProps) => {
  return (
    <ItemsConteiner>
      <Button
        color="primary"
        variant={children.toLowerCase() === isActive ? "contained" : "outlined"}
        size="medium"
        sx={{ width: " 180px" }}
        onClick={(event) => {
          const text: string = event.currentTarget.innerText.toLowerCase();

          if (isActive !== "" && text === isActive) {
            setIsActive("");
          } else {
            setIsActive(text);
          }
        }}
      >
        {children}
      </Button>
    </ItemsConteiner>
  );
};

export { Item };
