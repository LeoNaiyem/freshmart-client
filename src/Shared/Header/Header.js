import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useAuth();
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
        {user?.email && (
          <Typography
            sx={{ color: "#039103", fontSize: "16px", fontWeight: 700 }}
            variant="caption"
          >
            {user.displayName}
          </Typography>
        )}
        {!user?.email ? (
          <Link to="/signIn">
            <button className="green-btn">Login</button>
          </Link>
        ) : (
          <button onClick={handleSignOut} className="green-btn">Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
