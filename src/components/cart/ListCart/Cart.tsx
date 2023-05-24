import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Skeleton,
  Box,
} from "@mui/material";

const CartItem = () => {
  return (
    <Card
      sx={{
        width: "600px",
        height: "270px",
        backgroundColor: "inherit",
        padding: "20px",
      }}
    >
      <Box display={"flex"}>
        <Skeleton
          sx={{ height: "200px", width: "70%" }}
          animation="wave"
          variant="rectangular"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: "5px",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            Lizard
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price: 999
          </Typography>

          <input type="number" defaultValue={0} />
        </CardContent>
      </Box>
    </Card>
  );
};
export { CartItem };
