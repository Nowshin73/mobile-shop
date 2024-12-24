import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Swal from 'sweetalert2';
import './Products.css';
import useUser from '../../hooks/useUser';

const ProductDetails = () => {
  const product = useLoaderData();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [User] = useUser();
  const userId = User?._id;

  const handleAddToCart = () => {
    if (quantity > product.stock) {
      Swal.fire({
        title: "Error!",
        text: "Quantity exceeds stock availability!",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    const cartItem = {
      userId: userId,
      productId: product._id,
      name: product.name,
      quantity,
      price: product.price,
    };

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((response) => response.json())
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Product added to cart successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add product to cart.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.5)",
    activeColor: "orange",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product?.ratings,
    isHalf: true,
  };

  return (
    <Fragment>
      <div className="product-details mx-auto max-w-[80%] mt-40 lg:mt-0 flex flex-col justify-center items-center">
        <div className="product-detail-wrapper flex flex-col justify-center items-center mt-36 ">
          <div className="product-details-container md:flex-row flex flex-col md:gap-32 items-start">
            <div className="pd-left flex flex-col justify-center items-center ">
              <div className="pdl-image-container flex flex-col justify-center items-center">
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 w-[300px] lg:w-[500px]"
                >
                  <SwiperSlide>
                    <img src={product.images} alt={`product-image`} className="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="pd-right flex flex-col gap-2">
              <h1 className='text-2xl'>{product.name}</h1>
              <p className='text-xs text-purple-800 font-semibold'>Product #{product._id}</p>
              <div className="rating flex gap-1 text-sm mb-8 py-4 border-b-2">
                <ReactStars {...options} />
                <span>({product.ratings}  )</span>
              </div>
              <p className='text-2xl font-thin'> ${product.price}</p>

              <div className="add-cart flex items-center gap-5">
                <div className="quantity flex items-center gap-2">
                  <button
                    onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                    className='px-4 text-2xl border bg-slate-500 hover:bg-slate-700 text-white'
                    disabled={!userId || User?.role !== "buyer"}
                  >
                    -
                  </button>
                  <input
                    value={quantity}
                    type='number'
                    readOnly
                    className='text-center p-2 border-none w-10'
                  />
                  <button
                    onClick={() => setQuantity((prev) => (prev < product.stock ? prev + 1 : prev))}
                    className='px-4 text-2xl border bg-slate-500 hover:bg-slate-700 text-white'
                    disabled={!userId || User?.role !== "buyer"}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className='btn btn-primary btn-wide text-white capitalize'
                  disabled={!userId || User?.role !== "buyer"}
                >
                  Add To Cart
                </button>
              </div>
              <p>Status: {" "}
                <b className={product.stock < 1 ? "text-red-700" : "text-green-700"}>{product.stock < 1 ? "OutOfStock" : "InStock"}</b>
              </p>
              <div className="pd-desc my-4 flex flex-col justify-start items-start border-t-2 ">
                <h2 className='text-center pt-2 text-xl mb-4'> Description</h2>
                <p className='font-normal w-2/3 mb-10'>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
