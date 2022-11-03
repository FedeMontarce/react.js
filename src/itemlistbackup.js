import React from "react";
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const Title = (prop) => {
    return(
        <>
        <h1 id="titulo"><Text italic >{prop.Titulo}</Text></h1>
        </>
    )
}

export default Title