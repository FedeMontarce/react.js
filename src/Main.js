import React from 'react'
import { Card } from 'antd';
import { Col, Row } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Title from './ItemListContainer';
import Icon from './CartWidget';
import Home from './Home';

const style = {
    padding: '8px 0px 0px 40px',
  };

const { Meta } = Card;

const Main = (tarjetas) => {
    return (
        <main>

          <Routes>

            <Route path='/' element={<Title/>}/>

            <Route path='/todos'/>

            <Route path='/maspopulares'/>

            <Route path='/lanzamientos'/>

            <Route path='/carrito' element/>

          </Routes>

        </main>
    )
}

export default Main