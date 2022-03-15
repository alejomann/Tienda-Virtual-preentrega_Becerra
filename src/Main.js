import React from 'react'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} />
        </Routes>
    </main>
  )
}

export default Main