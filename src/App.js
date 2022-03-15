// import React from 'react'
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
}
export default App