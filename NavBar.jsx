import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
const NavBar = () => {

    const navigate = useNavigate();

  return (
    <div className='navbar'>
        <img src={logo} alt="" width="7.5%"/>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/sales'><li>Sales</li></NavLink>
            <NavLink to='/customer'><li>Customer</li></NavLink>
            <NavLink to='/inventory'><li>Inventory</li></NavLink>
           
        </ul>
        <button onClick={()=> navigate('/sales', {replace:true})}>Get Started</button>
    </div>
  )
}

export default NavBar