import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import Header from "../../Shared/Header/Header";

const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const url = `https://freshmart-server.onrender.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const { name, price, weight, photoUrl } = product;

  //handling place order
  const handleCheckout = () => {
    const orderInfo = {
      customerName: user.displayName,
      customerEmail: user.email,
      productName: name,
      productPrice: price,
      productWeight: weight,
      productImage: photoUrl,
    };

    //sending orderInfo to the server
    fetch("https://freshmart-server.onrender.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setProduct({});
          toast.success("Your Order has been confirmed");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };
  return (
    <>
      <Header />
      <Container sx={{ padding: "3rem 5rem" }}>
        <Typography
          sx={{ fontWeight: "800", fontSize: "30px", mb: 5 }}
          color="#030a53"
          variant="h5"
        >
          Checkout
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ color: "#030a53", pl: "1rem", fontWeight: 700 }}
                    align="left"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{ color: "#030a53", fontWeight: 700 }}
                    align="center"
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    sx={{ color: "#030a53", fontWeight: 700 }}
                    align="center"
                  >
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ pl: "1rem", fontWeight: 600 }} align="left">
                    {name}
                  </TableCell>
                  <TableCell align="center">{price ? 1 : ""}</TableCell>
                  <TableCell align="center">{price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ pl: "1rem", fontWeight: 600, fontSize: "18px" }}
                    align="left"
                  >
                    Total
                  </TableCell>
                  <TableCell align="center"> </TableCell>
                  <TableCell
                    sx={{ fontWeight: 600, fontSize: "18px" }}
                    align="center"
                  >
                    {price}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Link to="/payment"> */}
          <Button
            onClick={handleCheckout}
            sx={{ mt: 3, p: 1, background: "#039103" }}
            variant="contained"
          >
            Checkout
          </Button>
          {/* </Link> */}
        </Box>
      </Container>
    </>
  );
};

export default Checkout;
