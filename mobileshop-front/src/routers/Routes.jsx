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
import UpdateProduct from '../pages/Seller/UpdateProduct'
import BuyerHome from '../pages/Buyer/BuyerHome'
import AdminHome from '../pages/Admin/AdminHome'
import UserList from '../pages/Admin/UserList'
import SellerHome from '../pages/Seller/SellerHome'
import MyProduct from '../pages/Seller/MyProduct'
import Products from '../pages/Products/Products'
import Checkout from '../pages/Buyer/Checkout'
import Orders from '../pages/Buyer/Orders'


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
                path: '/products',
                element: <Products></Products>
            },

            {
                path: '/products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://mobiverse.vercel.app/products/${params.id}`)
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
                element: <PrivateRoute><BuyerDashboard></BuyerDashboard></PrivateRoute>,
                children: [
                    {
                        path: '/user/dashboard/',
                        element: <BuyerHome></BuyerHome>
                    },
                    {
                        path: '/user/dashboard/cart',
                        element: <Cart></Cart>
                    },
                    {
                        path: '/user/dashboard/favourites',
                        element: <Wishlist></Wishlist>
                    },
                    {
                        path: '/user/dashboard/checkout',
                        element: <Checkout></Checkout>
                    },
                    {
                        path: '/user/dashboard/orders',
                        element: <Orders></Orders>
                    },
                ]
            },

            {
                path: '/admin/dashboard',
                element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>,
                children: [
                    {
                        path: '/admin/dashboard',
                        element: <AdminHome></AdminHome>,
                    },
                    {
                        path: '/admin/dashboard/users',
                        element: <UserList></UserList>,
                    },
                ]
            },
            {
                path: '/seller/dashboard',
                element: <PrivateRoute><SellerDashboard></SellerDashboard></PrivateRoute>,
                children:[
                    {
                        path: '/seller/dashboard',
                        element: <SellerHome></SellerHome>
                    },
                    {
                        path: '/seller/dashboard/my_products',
                        element: <MyProduct></MyProduct>
                    },
                    {
                        path: '/seller/dashboard/product/new',
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: '/seller/dashboard/product/update/:id',
                        element: <UpdateProduct></UpdateProduct>,
                        loader: ({ params }) => fetch(`https://mobiverse.vercel.app/products/${params.id}`)
                    },
                ]
            },

        ]
    }
]);