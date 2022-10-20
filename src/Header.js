import React from "react"
import NavBar from "./Components/NavBar"
import Icon from "./CardWidget"

function Header(prop) {
    return (
        <header id="main-header" className="header">
            <h1>{prop.titulo}</h1>
            <NavBar/>
            <Icon/>
        </header>
    )
}

export default Header