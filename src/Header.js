import React from 'react'
import NavBar from "./components/NavBar.js"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-dark py-4 px-4 d-flex align-items-center'>
      <Link to="/"><h1 className="mb-0 text-white">TIENDA VIRTUAL</h1></Link>
      <NavBar/>
    </header>
  )
}
export default Header