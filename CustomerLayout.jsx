import React from 'react'
import Customer from '../pages/Customer'
import { Outlet } from 'react-router-dom'
const CustomerLayout = () => {
  return (
    <div>
        <Customer/>
        <Outlet/>
    </div>
  )
}

export default CustomerLayout