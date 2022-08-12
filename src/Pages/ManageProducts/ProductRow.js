import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TableCell, TableRow } from "@mui/material";
import React from "react";

const ProductRow = ({ product, index, handlePdDelete }) => {
  const { _id, name, price, weight } = product;
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center">{index +1}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="center">${price}</TableCell>
      <TableCell align="center">{weight}</TableCell>
      <TableCell align="center">
        <button
          style={{
            color: "#fff",
            background: "green",
            fontSize: "5px",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            marginRight: "5px",
            cursor:'pointer',
            padding: "3px",
          }}
        >
          <EditIcon fontSize="small" />
        </button>
        <button
          onClick={()=>handlePdDelete(_id)}
          style={{
            color: "#fff",
            fontSize: "5px",
            background: "red",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            cursor:'pointer',
            padding: "3px",
          }}
        >
          <DeleteIcon fontSize="small" />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
