import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Icon from './CartWidget';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

const Main = () => {
    return (
        <main>

          <Routes>

            <Route path='/' element={<ItemListContainer/>}/>

            <Route path='/todos' element={<ItemListContainer/>}/>

            <Route path='/maspopulares'/>

            <Route path='/lanzamientos'/>

            <Route path='/carrito' element={<Icon/>}/>

          </Routes>

        </main>
    )
}

export default Main