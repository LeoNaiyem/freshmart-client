import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Checkout from "./Pages/Checkout/Checkout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Deals from "./Pages/Deals/Deals";
import EditProduct from "./Pages/EditProduct/EditProduct";
import Home from "./Pages/Home/Home";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import NotFound from "./Pages/NotFound/NotFound";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/Payment/Payment";
import Private from "./Pages/Private/Private";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="deals" element={<Deals />} />
        <Route path="/" element={<Private />}>
          <Route path="checkout/:id" element={<Checkout />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payment" element={<Payment />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<ManageProducts />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product" element={<EditProduct />} />
          </Route>
        </Route>
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
