import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Skeleton,
} from "@mui/material";

import { IShop } from "./CardList";

const CardItem = ({ _id, description, photo, price, shop, title }: IShop) => {
  return (
    <Card sx={{ width: "345px", height: "260px", backgroundColor: "inherit" }}>
      {/* <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" /> */}
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
        <Button size="small" variant="contained" id={_id}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
export { CardItem };
