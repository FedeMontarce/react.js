import React from "react"
import NavBar from "./Components/NavBar"
import { Space, Typography } from 'antd';
import { Link } from "react-router-dom"

const { Text } = Typography;

function Header(prop) {
    return (
        <header id="main-header" className="header">
            <Link to="/"><h1><Text italic >KND : Disqueria</Text></h1></Link>
            <NavBar/>
        </header>
    )
}

export default Header