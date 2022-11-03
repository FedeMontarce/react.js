import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Title from "./ItemListContainer"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

function App() {
    return (

        <BrowserRouter>
            <Header/>
            <Title 
            Titulo = "Albumes/Artistas:"
            />
            <Main/>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App

