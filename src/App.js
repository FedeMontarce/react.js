import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Title from "./ItemListContainer"

function App() {
    return (
        <>
            <Header/>
            <Title 
            Titulo = "Albumes/Artistas:"
            />
            <Main/>
            <Footer/>
        </>
    )
}

export default App

