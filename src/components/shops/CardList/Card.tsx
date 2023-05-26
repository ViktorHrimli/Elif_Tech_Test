import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";

import { IShop } from "@/types";

interface ICardItem extends IShop {
  setCart: (value: any) => void;
}

const CardItem = ({
  _id,
  description,
  photo,
  price,
  shop,
  title,
  setCart,
}: ICardItem) => {
  const handleAddToCart = () => {
    setCart((prev: Array<{}>) =>
      prev.concat({ title, price, shop, _id, photo })
    );
  };

  return (
    <Card sx={{ width: "345px", height: "260px", backgroundColor: "inherit" }}>
      <CardMedia image={photo} sx={{ height: 140 }} />
      <CardContent sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Typography gutterBottom variant="body2" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          Price: {price}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {shop}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          id={_id}
          onClick={handleAddToCart}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
export { CardItem };
