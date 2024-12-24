
import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { MdClose, MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import Swal from 'sweetalert2'
const Product = ({ product }) => {
  const [User] = useUser();
  const userId = User?._id;
  const [open, setOpen] = useState(false);
  const [fav, setFav] = useState(false);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.5)",
    activeColor: "orange",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true
  }
  const handleAddToFav = () => {
     
      const favItem = {
        userId: userId,
        productId: product._id,
        name: product.name,
        stock: product.stock,
        image:product.images,
        price: product.price,
      };
  
      fetch("http://localhost:5000https://mobiverse.vercel.app/fav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favItem),
      })
        .then((response) => response.json())
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: "Product added to Favourites!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: "Failed to add product to Favourites.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
        setFav(true)
    };
  
  return (
    <div className='group card bg-base-100 p-1 w-[300px] h-[400px] shadow-xl ' key={product._id}>

      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
        {fav ? <><button onClick={() => setFav(false)} disabled={!userId || User?.role !== "buyer"} className='relative top-8 right-4 text-fuchsia-600 z-[5] text-xl float-right cursor-pointer'><MdFavorite></MdFavorite></button><br/></> :
          <><button onClick={handleAddToFav} disabled={!userId || User?.role !== "buyer"} className='relative top-8 right-4 text-fuchsia-600 z-[5] text-xl float-right cursor-pointer'><MdFavoriteBorder  ></MdFavoriteBorder></button><br /></>}
        <BsEye onClick={() => setOpen(true)} className='relative top-8 right-4 z-[5] text-xl float-right cursor-pointer'></BsEye>
        <div
          className={
            open
              ? "fixed top-0 left-0 w-full h-full flex justify-center items-center z-30 bg-[#00000082]"
              : "flex justify-center items-center"
          }
        >
          <img
            alt={product.name}
            src={product.images}
            className={
              open
                ? "fixed w-[90vw] h-[50vh] md:w-[80vh] md:h-[50vh] z-40 object-contain"
                : "w-[250px] h-[250px] relative rounded -top-5 object-cover object-center group-hover:opacity-75"
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
      <div className='relative -top-5 flex flex-col justify-center items-center'>

        <div className="flex flex-col justify-start items-center">
          <h2 className="font-semibold">
          {product.name}
          </h2>

          {/* <div className="rating">
            <ReactStars {...options} />
          </div> */}
        </div>
        <p className="mt-1 text-xl font-semibold text-red-800 my-2 ">{product.price}</p>
        <Link key={product._id} to={`/products/${product._id}`} ><button  className="btn btn-primary">View</button></Link>
      </div>
    </div>
  )
}

export default Product