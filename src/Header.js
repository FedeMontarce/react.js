import React from "react"
import NavBar from "./Components/NavBar"
import Icon from "./CartWidget"
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

function Header(prop) {
    return (
        <header id="main-header" className="header">
            <h1><Text italic >KND : Disqueria</Text></h1>
            <NavBar/>
            <Icon/>
        </header>
    )
}

export default Header