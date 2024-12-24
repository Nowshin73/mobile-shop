import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const BuyerDashboard = () => {
  return (
    
    <div>
    <Sidebar></Sidebar>
    <Outlet></Outlet>
  </div>
  )
}

export default BuyerDashboard