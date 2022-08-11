import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="brand">FRESHMART CO-OP</div>
      </Link>
      <div className="navigation">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/orders">
          Orders
        </Link>
        <Link className="nav-link" to="/dashboard">
          Admin
        </Link>
        <Link className="nav-link" to="/deals">
          Deals
        </Link>
        <Link to="/signIn">
          <button className="green-btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
