import React from "react";
import { Button } from 'antd';
import { Link } from "react-router-dom";
import Icon from "../CartWidget";

const NavBar = () => {
    return(
        <nav className="nav">
            <Link className="nav_link" to="/todos"><Button type="primary" ghost>Todos</Button></Link>
            <Link className="nav_link" to="/todos/maspopulares"><Button type="primary" ghost>Mas populares</Button></Link>
            <Link className="nav_link" to="/todos/lanzamientos"><Button type="primary" ghost>Lanzamientos</Button></Link>
            <Link className="nav_link" to="/carrito"><Icon/></Link>
        </nav>
    )
}

export default NavBar