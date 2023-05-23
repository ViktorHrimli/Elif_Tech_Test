import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Skeleton,
} from "@mui/material";

const CardItem = () => {
  return (
    <Card sx={{ width: "345px", height: "260px", backgroundColor: "inherit" }}>
      <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
      <CardContent sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Price: 999
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
export { CardItem };
