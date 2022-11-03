import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Title from "./ItemListContainer"
import { BrowserRouter } from "react-router-dom"

function App() {
    return (

        <BrowserRouter>
            <Header/>
            <Title 
            Titulo = "Albumes/Artistas:"
            />
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App

