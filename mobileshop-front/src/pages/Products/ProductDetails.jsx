import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import "./Products.css"
import Loader from '../../components/loader/Loader';
import Reviewcard from './Reviewcard';

const ProductDetails = () => {
  const product = useLoaderData();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //   const product = {       
  //     name: "Matrix Tennis necklace1",
  //     description: "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
  //     price: 500,
  //     category: "jwelry",
  //     numofReviews: 4,
  //     ratings: 3.6,
  //     images: [{ public_id:"img1",
  //             url:"https://i.ibb.co.com/10bzw9k/image.png"
  //             },
  //             { public_id:"img2",
  //             url:"https://i.ibb.co.com/wWchmCL/image.png"
  //             },
  //             { public_id:"img3",
  //             url:"https://i.ibb.co.com/wLhZ16V/image.png"
  //             },
  //             { public_id:"img4",
  //               url:"https://i.ibb.co.com/C7qtmDs/image.png"
  //             }],
  //     reviews: [
  //          {
  //             name:"Nowshin",
  //             rating: 4.5,
  //             comment:" this is a comment"
  //         },
  //         {
  //             name:"Nawar",
  //             rating: 3,
  //             comment:" this is 2nd comment"
  //         },
  //         {
  //             name:"Nafisa",
  //             rating: 2,
  //             comment:" this is 3nd comment"
  //         },
  //         {
  //             name:"Nishat",
  //             rating: 5,
  //             comment:" this is 4th comment"
  //         }
  //     ]
  // };

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.5)",
    activeColor: "orange",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product ? product.rating?.rating : 3.5,
    isHalf: true
  }

  return (
    <Fragment>
      <div className="product-details mx-auto max-w-[80%] mt-40 lg:mt-0 flex flex-col justify-center items-center">
        <div className="product-detail-wrapper flex flex-col justify-center items-center mt-36 ">
          <div className="product-details-container md:flex-row flex flex-col md:gap-32 items-start">
            <div className="pd-left flex flex-col justify-center items-center ">
              <div className="pdl-image-container flex flex-col justify-center items-center">
                {/* Main Swiper for images */}
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
                  {/* {product.images &&
                    product.images.map((pic, index) => (
                      <SwiperSlide key={index}>
                        <img src={pic.url} alt={`product-image-${index}`} className="" />
                      </SwiperSlide>
                    ))} */}
                  <SwiperSlide>
                    <img src={product.images} alt={`product-image`} className="" />
                  </SwiperSlide>
                </Swiper>

                {/* Thumbnail Swiper */}
                {/* {product.images && (
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper w-[70%] relative"
                  >
                    {product.images.map((pic, index) => (
                      <SwiperSlide key={index}>
                        <img src={pic.url} alt={`product-thumbnail-${index}`} className="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )} */}
              </div>
            </div>

            <div className="pd-right flex flex-col gap-2">
              {/* Product information can be rendered here */}
              <h1 className='text-2xl'>{product.name}</h1>
              <p className='text-xs text-purple-800 font-semibold'>Product #{product._id}</p>
              {/* <p>{product.psubtitle}</p> */}
              <div className="rating flex gap-1 text-sm mb-8 py-4 border-b-2">
                <ReactStars {...options} />
                <span>({product.numOfReview} Reviews )</span>
              </div>
              <p className='text-2xl font-thin'> ${product.price}</p>

              {/* <ul className='pd-list mb-3'>
                    {product.pdes.desa.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul> */}
              <div className="add-cart flex items-center gap-5">
                {/* <div className="quantity">
                  <button className='px-4 text-2xl border bg-slate-500 hover:bg-slate-700 text-white'>-</button>
                  <input value="1" type='number' readOnly className=' text-center p-2 border-none w-10' />
                  <button className='px-4 text-2xl border bg-slate-500 hover:bg-slate-700 text-white'>+</button>
                </div> {''} */}
                <button className='btn btn-primary btn-wide text-white capitalize'>Add To Cart</button>
              </div>
              <p>Status: {" "}
                <b className={product.Stock < 1 ? "text-red-700" : "text-green-700"}>{product.Stock < 1 ? "OutOfStock" : "InStock"}</b>
              </p>
              <div className="pd-desc my-4 flex flex-col justify-start items-start border-t-2 ">
                <h2 className='text-center pt-2 text-xl mb-4'> Description</h2>
                <p className=' font-normal w-2/3 mb-10'>{product.description}</p>
                {/* <button className='btn-primary capitalize mb-20 '>Submit Review</button> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pd-bottom py-10 flex flex-col justify-center items-center border-t-2 ">
          <div className="flex items-center justify-center">
            <h2 className=" mb-4 p-4 w-fit border-b-2 self-center">REVIEWS</h2>
          </div>
          {
            product.reviews && product.reviews[0] ?
              <div className="reviews flex mb-20 md:flex-row overflow-x-scroll w-[80vw] lg:w-[1200px]">
                {
                  product.reviews && product.reviews.map((review) => <Reviewcard key={review._id} review={review} />)
                }
              </div>
              :

              <p className='no-review text-center'>No Reviews Yet</p>

          } 
        </div> */}
      </div>
    </Fragment>
  )
}

export default ProductDetails