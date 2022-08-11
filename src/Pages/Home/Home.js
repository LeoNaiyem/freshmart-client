import SearchIcon from '@mui/icons-material/Search';
import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import "./Home.css";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="search-container">
        <div className="search-box">
          <input type="text" name="pdSearch" placeholder="Search Product" />
          <span className="search-icon">
            <SearchIcon />
          </span>
        </div>
        <button className="search-btn">Search</button>
      </div>

      <Container sx={{my:"50px"}}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((pd) => (
            <SingleProduct key={pd._id} product={pd} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
