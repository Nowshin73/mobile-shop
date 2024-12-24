import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const SellerDashboard = () => {
  return (
    <div className='flex'>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  )
}

export default SellerDashboard