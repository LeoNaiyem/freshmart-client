import DeleteIcon from "@mui/icons-material/Delete";
import { TableCell, TableRow } from "@mui/material";
import React from "react";

const OrderRow = ({ order, index, handleOrderCancel }) => {
  const { _id, productName, productPrice, productWeight } = order;
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center">{index + 1}</TableCell>
      <TableCell align="left">{productName}</TableCell>
      <TableCell align="center">${productPrice}</TableCell>
      <TableCell align="center">{productWeight}</TableCell>
      <TableCell align="center">
        <button
          onClick={() => handleOrderCancel(_id)}
          style={{
            color: "#fff",
            fontSize: "5px",
            background: "red",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            cursor: "pointer",
            padding: "3px",
          }}
        >
          <DeleteIcon fontSize="small" />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
