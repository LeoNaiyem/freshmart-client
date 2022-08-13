import {
    Box,
    CircularProgress,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://sheltered-lake-72050.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const handlePdDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      fetch(`https://sheltered-lake-72050.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            const remaining = products.filter((pd) => pd._id !== id);
            setProducts(remaining);
            toast.error("Product Deleted Successfully!");
          }
        });
    }
  };
  return (
    <Container>
      <Typography sx={{ fontWeight: 700, my: 2 }} variant="h5" color="#133730">
        Manage Products
      </Typography>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: "#030a53", pl: "1rem", fontWeight: 700 }}
                  align="center"
                >
                  NO.
                </TableCell>
                <TableCell
                  sx={{ color: "#030a53", pl: "1rem", fontWeight: 700 }}
                  align="left"
                >
                  Product Name
                </TableCell>
                <TableCell
                  sx={{ color: "#030a53", fontWeight: 700 }}
                  align="center"
                >
                  Price
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
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((pd, index) => (
                <ProductRow
                  key={pd._id}
                  product={pd}
                  index={index}
                  handlePdDelete={handlePdDelete}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default ManageProducts;
