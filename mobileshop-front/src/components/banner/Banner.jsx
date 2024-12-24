import React from 'react'

const Banner = () => {
    return (
        <div style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://i.ibb.co.com/nCGNYzq/low-poly-abstract-banner-design-2708.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} className="hero min-h-screen">
            <div className="hero-content text-center">
                <div><img src="https://i.ibb.co.com/VVdK6FG/image.png" alt="" /></div>
                <div className="w-2/3">
                    <h1 style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}} className="text-5xl text-white font-bold">Your Gateway to the Latest Smartphones & Accessories!</h1>
                    <p className="py-6 text-white ">
                    Discover a world of cutting-edge technology at unbeatable prices. From the latest smartphones to must-have accessories, 
                    we've got everything to keep you connected and ahead of the curve. Shop now and experience excellence!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner