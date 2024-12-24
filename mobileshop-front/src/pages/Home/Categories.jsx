import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({ category }) => {

    return (
        <div key={category.name} className="card  image-full w-96 ">

            <figure>
                <img
                    alt={category.name}
                    src={category.image} />
            </figure>
            <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title text-white"> {category.name}</h2>

                <div className="card-actions justify-end">
                    <Link to="/products"><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
              
    )
}

export default Categories