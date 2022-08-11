import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { toast } from "react-toastify";

const SingleProduct = ({ product }) => {
  const { name, price, photoUrl } = product;
  const handleBuyNow = id => {
    toast('success');
  }
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card
        gutterBottom
        sx={{
          height: "370px",
          width: "350px",
          padding: "0 .5rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mb: 3
        }}
      >
        <CardMedia
          sx={{ width: "auto", height: "200px", margin: "0 auto" }}
          component="img"
          alt={name}
          height="140"
          image={photoUrl}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 600 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "auto 0",
          }}
        >
          <Typography
            sx={{ fontSize: "32px", fontWeight: 900, color: "#039103" }}
            variant="p"
          >
            ${price}
          </Typography>
          <Button onClick={handleBuyNow} variant='contained' sx={{ background: "#039103" }}>
            By Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
