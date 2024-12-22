
import React, { useState } from 'react'
import {  BsEye } from 'react-icons/bs'
import { MdClose, MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import ReactStars from "react-rating-stars-component"
import {Link} from 'react-router-dom'
const Product = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [fav, setFav] = useState(false);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.5)",
    activeColor: "orange",
    size:window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf:true
  }
  return (
    <div className='product-card group' key={product._id}>

      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
        {fav ? <><MdFavorite onClick={() => setFav(false)} className='relative top-8 right-4 text-fuchsia-600 z-[5] text-xl float-right cursor-pointer'></MdFavorite> <br /></> :
          <><MdFavoriteBorder onClick={() => setFav(true)} className='relative top-8 right-4 text-fuchsia-600 z-[5] text-xl float-right cursor-pointer'></MdFavoriteBorder><br /></>}
        <BsEye onClick={() => setOpen(true)} className='relative top-8 right-4 z-[5] text-xl float-right cursor-pointer'></BsEye>
        <div
          className={
            open
              ? "fixed top-0 left-0 w-full h-full flex justify-center items-center z-30 bg-[#00000082]"
              : ""
          }
        >
          <img
            alt={product.name}
            src={product.images[0].url}
            className={
              open
                ? "fixed w-[90vw] h-[80vh] md:w-[80vh] md:h-[90vh] z-40 object-contain"
                : "h-full w-full relative rounded -top-5 object-cover object-center group-hover:opacity-75"
            }
          />
          <MdClose
            onClick={() => setOpen(false)}
            className={
              open
                ? "fixed top-4 right-4 font-bold text-4xl md:text-5xl z-50 text-red-800 shadow-md bg-white rounded-full p-2"
                : "hidden"
            }
          />
        </div>

      </div>
      <div className='relative -top-5'>
       
        <div className="flex justify-between items-baseline"><h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <span className='text-violet-600 text-xs'>Product #{product._id}</span>
        <div className="rating">
        <span className='text-xs' > {product.numOfReview} reviews</span>  <ReactStars {...options}/>
        </div>
        </div>
        <p className="mt-1 text-lg font-medium text-gray-900 mb-3">${product.price}</p>
        <Link key={product._id} to={`/product/${product._id}`} ><button className='btn-primary'>View</button></Link>
      </div>
    </div>
  )
}

export default Product