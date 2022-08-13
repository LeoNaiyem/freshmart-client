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
import useAuth from "../../hooks/useAuth";
import Header from "../../Shared/Header/Header";
import OrderRow from "./OrderRow";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5001/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, [user.email]);

  const handleOrderCancel = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel the order?"
    );
    if (confirmed) {
      fetch(`http://localhost:5001/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            const remaining = orders.filter((pd) => pd._id !== id);
            setOrders(remaining);
            toast.error("The Order Has Been Cancelled!");
          }
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <Container>
        <Typography
          sx={{ fontWeight: 700, my: 2 }}
          variant="h5"
          color="#133730"
        >
          Your Orders
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
                {orders.map((order, index) => (
                  <OrderRow
                    key={order._id}
                    order={order}
                    index={index}
                    handleOrderCancel={handleOrderCancel}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  );
};

export default Orders;
