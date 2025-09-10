import React from 'react'
import Home from './pages/Home'
import Sales from './pages/Sales'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Inventory from './pages/Inventory'
import Rootlayout from './layout/Rootlayout'
import CustomerLayout from './layout/CustomerLayout'
import CustomerInfo from './components/Customerinfo'
import CustomerForm from './components/CustomerForm'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
          <Route index element={<Home/>}/>
          <Route path='sales' element={<Sales/>}/>
          <Route path='customer' element={<CustomerLayout/>}>
            <Route path='info' element={<CustomerInfo/>}/>
            <Route path='form' element={<CustomerForm/>}/>
          </Route>
          <Route path='inventory' element={<Inventory/>}/>
            
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App