import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="brand">
            FRESHMART CO-OP
            </div>
            <div className="navigation">
            <Link className="nav-link" to ="home">Home</Link>
            <Link className="nav-link" to ="orders">Orders</Link>
            <Link className="nav-link" to ="admin">Admin</Link>
            <Link className="nav-link" to ="deals">Deals</Link>
            <Link to ="login"><button className="green-btn">Login</button></Link>
            </div>
        </div>
    );
};

export default Header;