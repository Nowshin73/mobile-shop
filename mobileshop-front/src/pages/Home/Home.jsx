import React, { Fragment, useEffect, useState } from "react";
//import { CgMouse } from "react-icons/cg"
import "./Home.css"

import Swal from 'sweetalert2'

import Product from "../../pages/Products/Product";
import Banner from "../../components/banner/Banner";
const Home = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
},[])


  return (
    <Fragment>
      <div className="bg-white">
        <Banner></Banner>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-center">
            <h2 className=" mb-4 p-4 w-fit border-b-2 self-center card-title">Explore Our Products</h2>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
            {products && products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>

        </div>
      </div>
    </Fragment>
  )
}
export default Home;