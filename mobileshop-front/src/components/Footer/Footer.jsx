import React from 'react'
import "./Footer.css"
import { FiFacebook } from 'react-icons/fi'
import { BsInstagram, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
       <div className="f-wrapper">
          <h3>Customer Service</h3> 
           <a>FAQ</a>
           <a>Contact Us</a>
           <div
          className="brandname text-white font-bold text-2xl mt-10">

          <span> MobiVerse </span>
        </div>
       </div>
       <div className="f-wrapper">
          <h3>About Us</h3> 
           <a>About Us</a>
           <a>Sustainability</a>
           <a>Jobs & Career</a>
           <a>Corporate Gifts</a>
           <a>For Professionals</a>
           <a>Sitemap</a>
           
       </div>
       <div className="f-wrapper">
          <h3>Legal</h3> 
          <a>Terms Of Use</a>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
          <a>Cookie Consent</a>
          <a>Imprint</a>
          <a>REACH information</a>
       </div>
    </div>   
    <div className="footer-bottom">   
          <div className="f-left">
              <span >Copyright ⓒ 2024 MobiVerse. All rights reserved.</span>
          </div> 
        <div className="f-right">
           <a><FiFacebook></FiFacebook></a>
           <a><BsPinterest></BsPinterest></a>
           <a><BsTwitter></BsTwitter></a> 
           <a><BsInstagram></BsInstagram></a>
           <a><BsYoutube></BsYoutube></a>
        </div>
    </div>
   </div>
  )
}

export default Footer