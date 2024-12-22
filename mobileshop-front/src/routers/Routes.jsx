import React from 'react'
import SignUp from '../pages/LoginSignUp/SignUp'
import Home from '../pages/Home/Home'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Product from '../pages/Products/Product'
import ProductDetails from '../pages/Products/ProductDetails'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import BuyerDashboard from '../pages/Buyer/BuyerDashboard'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import SellerDashboard from '../pages/Seller/SellerDashboard'
import Main from '../layout/Main'
import Cart from '../pages/Buyer/Cart'
import Login from '../pages/LoginSignUp/Login'
import Wishlist from '../pages/Buyer/Wishlist'
import Register from '../pages/LoginSignUp/Register'
import Auth from '../pages/LoginSignUp/Auth'
import AddProduct from '../pages/Seller/AddProduct'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Auth></Auth>
        },
       
        {
            path: '/products/:id',
            element: <ProductDetails></ProductDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/product',
            element: <Product></Product>
        },
        {
            path: '/user/dashboard',
            element: <BuyerDashboard></BuyerDashboard>
        },
        {
            path: '/cart',
            element: <Cart></Cart>
        },
        {
            path: '/favourites',
            element: <Wishlist></Wishlist>
        },
        {
            path: '/admin/dashboard',
            element: <AdminDashboard></AdminDashboard>
        },
        {
            path: '/seller/dashboard',
            element: <SellerDashboard></SellerDashboard>
        },
        {
            path: '/seller/product/new',
            element: <AddProduct></AddProduct>
        },
        
    ]
    }
]);