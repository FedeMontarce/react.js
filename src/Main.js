import React from 'react'
import ContadorContainer from './ItemListContainer'
import { Card } from 'antd';

const { Meta } = Card;

const Main = (tarjetas) => {
    return (
        <main>
            <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://www.efeeme.com/wp-content/uploads/gorillaz-22-05-13-a.jpg" />}>
            <Meta title="Gorillaz" description="Demon days" />
            </Card>
            <ContadorContainer/>
        </main>
    )
}

export default Main