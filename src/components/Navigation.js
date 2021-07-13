import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    ); //link : react를 안고치고 불러온다
}

export default Navigation;
