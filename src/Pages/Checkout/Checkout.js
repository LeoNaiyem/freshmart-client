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
import { Link, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5001/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const { name, price } = product;
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
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell sx={{ color:'#030a53', pl: "1rem", fontWeight: 700}} align="left"> Name</TableCell>
                        <TableCell sx={{ color:'#030a53', fontWeight: 700}} align="center">Quantity</TableCell>
                        <TableCell sx={{ color:'#030a53', fontWeight: 700}} align="center">Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell sx={{pl: "1rem", fontWeight: 600}} align="left">{name}</TableCell>
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center">{price}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{pl: "1rem", fontWeight: 600, fontSize:'18px'}} align="left"> Total </TableCell>
                        <TableCell align="center"> </TableCell>
                        <TableCell sx={{fontWeight: 600, fontSize:'18px'}} align="center"> {price} </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to='/payment'>
                <Button sx={{mt:3 , p:1, background: '#039103' }} variant='contained'>Checkout</Button>
            </Link>
        </Box>
      </Container>
    </>
  );
};

export default Checkout;