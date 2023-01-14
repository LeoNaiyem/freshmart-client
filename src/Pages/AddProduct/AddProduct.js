import {
    Box,
    Button,
    CircularProgress,
    Container,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const key = process.env.REACT_APP_IMAGE_STORAGE_API_KEY;
  //collecting product information and sending to  the database
  const onSubmit = async (data) => {
    //sending data to imagebb
    const productPhoto = data.image[0];
    const formData = new FormData();
    formData.append("image", productPhoto);
    const url = `https://api.imgbb.com/1/upload?key=${key}`;
    setIsLoading(true);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const imgUtl = result.data.url;
          const product = {
            name: data.productName,
            price: data.productPrice,
            weight: data.productWeight,
            photoUrl: imgUtl,
          };
          fetch("https://freshmart-server.onrender.com/products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                setIsLoading(false);
                reset();
                toast.success("Product Added Successfully");
              }
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ width: "90%", padding: "2rem 2.5rem" }}>
        <Typography
          sx={{ fontWeight: 700, mb: 3 }}
          variant="h5"
          color="#133730"
        >
          Add A Product
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("productName", {
                required: { value: true, message: "Name is required" },
              })}
              sx={{ width: "50%", pr: 1, mb: 2 }}
              id="outlined-basic"
              label="Product Name"
              type="text"
              variant="outlined"
            />
            <TextField
              {...register("productPrice", {
                required: { value: true, message: "Product Price is required" },
              })}
              sx={{ width: "50%", pr: 1, mb: 2 }}
              id="outlined-basic"
              label="Product Price"
              type="number"
              variant="outlined"
            />
            <TextField
              {...register("productWeight", {
                required: {
                  value: true,
                  message: "Product Weight is required",
                },
              })}
              sx={{ width: "50%", pr: 1, mb: 2 }}
              id="outlined-basic"
              label="Product Weight"
              type="text"
              variant="outlined"
            />
            <TextField
              {...register("image", {
                required: { value: true, message: "Product Photo is required" },
              })}
              sx={{ width: "50%", pr: 1, mb: 2 }}
              id="outlined-basic"
              type="file"
              variant="outlined"
            />

            <Button
              sx={{ background: "#133730", p: 1, width: "10%" }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </form>
        )}
      </Paper>
    </Container>
  );
};

export default AddProduct;
