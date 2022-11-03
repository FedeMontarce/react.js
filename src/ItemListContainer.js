import React from "react";
import { Space, Typography } from 'antd';
import AllCards from "./Cards";

const { Text, Link } = Typography;

const ItemListContainer = (prop) => {
    
    return(
        <>
        <h1 id="titulo"><Text italic >{prop.Titulo}</Text></h1>
        <AllCards/>
        </>
    )
}

export default ItemListContainer