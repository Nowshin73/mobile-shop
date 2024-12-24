import React from 'react'
import { Link } from 'react-router-dom'

const BuyerHome = () => {
  return (
    <div className="p-6 lg:p-12 w-full bg-gray-100 min-h-screen">
    <h2 className="text-3xl font-bold text-center mb-6">User Dashboard</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     
      <div className="bg-white flex flex-col justify-between gap-10  shadow-md rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-700">Cart </h3>
        
        <Link
          to="/user/dashboard/cart"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
        >
          View Cart
        </Link>
      </div>
      <div className="bg-white flex flex-col justify-between gap-10 shadow-md rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-700">My Favourites Items </h3>
        
        <Link
          to="/user/dashboard/favourites"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
        >
          View Favourites
        </Link>
      </div>
    </div>
  </div>
  )
}

export default BuyerHome