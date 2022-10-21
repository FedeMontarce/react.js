import React from "react";
import { Button } from 'antd';

const NavBar = () => {
    return(
        <nav>
            <Button type="primary" ghost>Ver Todos</Button>
            <Button type="primary" ghost>Mas populares</Button>
            <Button type="primary" ghost>Lanzamientos</Button>
        </nav>
    )
}

export default NavBar