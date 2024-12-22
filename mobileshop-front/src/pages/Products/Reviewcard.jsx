import React from 'react'
import ReactStars from "react-rating-stars-component"
//import reviewbg from "../../images/banner1.jpg"
import propic from "../../assets/propic.png"
const Reviewcard = ({review}) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.5)",
    activeColor: "orange",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true
  }
  
  return (
    <div className="review-card flex flex-col border shadow-md  lg:w-[30vmax] items-center m-2 p-5">
      <img src={propic} alt="propic" className='w-20 h-20 p-2 rounded-full border-2 border-purple-300' />
      <p className='text-lg my-2 py-1 border-b-2 border-purple-300 font-semibold'>{review.name}</p>
      <ReactStars {...options}></ReactStars>
      <span>{review.comment}</span>
    </div>
  )
}

export default Reviewcard 