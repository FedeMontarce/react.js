import React from "react"
import NavBar from "./Components/NavBar"
import Icon from "./CardWidget"
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

function Header(prop) {
    return (
        <header id="main-header" className="header">
            <h1><Text italic >{prop.titulo}</Text></h1>
            <NavBar/>
            <Icon/>
        </header>
    )
}

export default Header