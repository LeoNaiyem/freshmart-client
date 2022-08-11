import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "./App.css";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditProduct from "./Pages/EditProduct/EditProduct";
import Home from "./Pages/Home/Home";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import Orders from "./Pages/Orders/Orders";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<ManageProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product" element={<EditProduct />} />
        </Route>
        <Route path="signIn" element={<SignIn />} />

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
