import React, { Fragment, useEffect, useState } from 'react'
import Product from './Product';
import "./Products.css"
import { getProduct } from '../../action/productAction';
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination"
import { Slider } from '@mui/material';
import { Typography } from '@mui/material';
// const products =
// {
//     _id: 1,
//     images: ["https://i.ibb.co.com/10bzw9k/image.png", "https://ibb.co/s1QQbYL", "https://ibb.co/h9CcgwQ", "https://ibb.co/4fdcYSP"],
//     name: "Matrix Tennis necklace",
//     psubtitle: "Round cut, Small, White, Rhodium plated",
//     psize: ["M", "L", "XL"],
//     price: 500,
//     pno: 10,
//     pdes: {
//         desp: "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
//         desa: ["Article no.: 5681796", "Collection:  Matrix Tennis", "Color:  White", "Minimum length: 41 cm", "Minimum length: 41 cm", "Width: 0.4 cm", "Material:  Rhodium plated, Zirconia"]
//     }
// };
const Products = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 2500]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);
    //************** category************ */
    const categories = [
        "jwelry",
        "clothes",
        "laptops",
        "watches",
        "smartphones"
    ];
    const { loading, error, products, productsCount, resultPerPage, filteredProductCount} = useSelector(
        (state) => state.products
    );

    const { keyword } = useParams();
    console.log("keyword" + keyword);

    // pagination current page setting
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }
    console.log("total number of products", productsCount)
    console.log("result per page", resultPerPage)
    //price handler 
    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    }
    //const [products, setProducts] = useState([]);

    //     },
    //     {
    //         "pid": 2,
    //         "pimages": ["https://i.ibb.co.com/tZbgTbn/image.png", "https://ibb.co/Mhr1Zbt", "https://ibb.co/CvxMMRM", "https://ibb.co/6N6XSmx"],
    //         "ptitle": "Dulcis necklace",
    //         "psubtitle": "Candy, Multicolored, Gold-tone plated",
    //         "psize": ["M", "L", "XL"],
    //         "pprice": 700,
    //         "pno": 10,
    //         "pdes": {
    //             "desp": "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    //             "desa": ["Article no.: 5681796", "Collection:  Matrix Tennis", "Color:  White", "Minimum length: 41 cm", "Minimum length: 41 cm", "Width: 0.4 cm", "Material:  Rhodium plated, Zirconia"]
    //         }
    //     },
    //     {
    //         "pid": 3,
    //         "pimages": ["https://i.ibb.co.com/dPBXN8C/image.png", "https://ibb.co/s1QQbYL", "https://ibb.co/h9CcgwQ", "https://ibb.co/4fdcYSP"],
    //         "ptitle": "Matrix Tennis necklace",
    //         "psubtitle": "Round cut, Small, White, Rhodium plated",
    //         "psize": ["M", "L", "XL"],
    //         "pprice": 500,
    //         "pno": 10,
    //         "pdes": {
    //             "desp": "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    //             "desa": ["Article no.: 5681796", "Collection:  Matrix Tennis", "Color:  White", "Minimum length: 41 cm", "Minimum length: 41 cm", "Width: 0.4 cm", "Material:  Rhodium plated, Zirconia"]
    //         }
    //     },
    //     {
    //         "pid": 4,
    //         "pimages": ["https://i.ibb.co.com/wLsTwQM/image.png", "https://ibb.co/0Cq10H4", "https://ibb.co/Jd936c5", "https://ibb.co/XbFZmxJ"],
    //         "ptitle": "Matrix Tennis necklace",
    //         "psubtitle": "Round cut, Small, White, Rhodium plated",
    //         "psize": ["M", "L", "XL"],
    //         "pprice": 500,
    //         "pno": 10,
    //         "pdes": {
    //             "desp": "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    //             "desa": ["Article no.: 5681796", "Collection:  Matrix Tennis", "Color:  White", "Minimum length: 41 cm", "Minimum length: 41 cm", "Width: 0.4 cm", "Material:  Rhodium plated, Zirconia"]
    //         }
    //     },
    //     {
    //         "pid": 5,
    //         "pimages": ["https://i.ibb.co.com/B6jjcM8/image.png", "https://ibb.co/KN9dp9B", "https://ibb.co/KNs4VfJ", "https://ibb.co/8rWmy0H"],
    //         "ptitle": "Dextera necklace",
    //         "psubtitle": "Statement, Mixed links, Large, White, Gold-tone plated",
    //         "psize": ["M", "L", "XL"],
    //         "pprice": 500,
    //         "pno": 10,
    //         "pdes": {
    //             "desp": "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    //             "desa": ["Article no.: 5681796", "Collection:  Matrix Tennis", "Color:  White", "Minimum length: 41 cm", "Minimum length: 41 cm", "Width: 0.4 cm", "Material:  Rhodium plated, Zirconia"]
    //         }
    //     },
    //     {
    //         "pid": 6,
    //         "pimages": ["https://i.ibb.co.com/3FNsWh4/image.png", "https://ibb.co/nwRP5DF", "https://ibb.co/4fRwxNz", "https://ibb.co/Z83JG71"],
    //         "ptitle": "Lilia Y necklace",
    //         "psubtitle": "Butterfly, Blue, Rhodium plated",
    //         "psize": ["M", "L", "XL"],
    //         "pprice": 500,
    //         "pno": 10,
    //         "pdes": {
    //             "desp": "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    //             "desa": ["Article no.: 5681796", "Collection:  Matrix Tennis", "Color:  White", "Minimum length: 41 cm", "Minimum length: 41 cm", "Width: 0.4 cm", "Material:  Rhodium plated, Zirconia"]
    //         }
    //     },
    //     {
    //         "pid": 7,
    //         "pimages": ["https://i.ibb.co.com/VNRCJdz/image.png", "https://ibb.co/k5fW6q3", "https://ibb.co/bdK6nty", "https://ibb.co/tmRSDmG"],
    //         "ptitle": "Gema necklace",
    //         "psubtitle": "Mixed cuts, Multicolored, Rhodium plated",
    //         "psize": ["M", "L", "XL"],
    //         "pprice": 500,
    //         "pno": 10,
    //         "pdes": {
    //             "desp": "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    //             "desa": ["Article no.: 5681796", "Collection:  Matrix Tennis", "Color:  White", "Minimum length: 41 cm", "Minimum length: 41 cm", "Width: 0.4 cm", "Material:  Rhodium plated, Zirconia"]
    //         }
    //     },
    //     {
    //         "pid": 8,
    //         "pimages": ["https://i.ibb.co.com/Kw2G04y/image.png", "https://ibb.co/L5xPkjp", "https://ibb.co/G7QRTNZ", "https://ibb.co/xSwZCkc"],
    //         "ptitle": "Dancing Swan necklace",
    //         "psubtitle": "Swan, Blue, Rhodium plated",
    //         "psize": ["M", "L", "XL"],
    //         "pprice": 500,
    //         "pno": 10,
    //         "pdes": {
    //             "desp": "Delivering a modern take on a truly classic style, this Matrix Tennis necklace is distinguished by the purity and elegance of its shimmering clear stones and rhodium plated design. Each individual stone works beautifully with the next, creating an endless stream of glamour that is perfect for your everyday look. Enjoy it for yourself, or as a gift for someone special.",
    //             "desa": ["Article no.: 5681796", "Collection:  Matrix Tennis", "Color:  White", "Minimum length: 41 cm", "Minimum length: 41 cm", "Width: 0.4 cm", "Material:  Rhodium plated, Zirconia"]
    //         }
    //     }

    // ];
    // const filteredProducts = products.slice(0,4);
    useEffect(() => {
        if (error) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Error: ${error}`,
            });
        }
        dispatch(getProduct(keyword, currentPage, price, category, ratings));
    }, [dispatch, error, keyword, currentPage, price, category, ratings]);
    
    console.log("Count", filteredProductCount);
    console.log("Products from Redux Store:", products);

    return (
        <Fragment>
            {
                loading ? <Loader></Loader> :
                    (<Fragment>
                        <div className="bg-white">
                            <div className="mx-auto flex flex-col md:flex-row  px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                                {/* ************************ Filter **************************** */}
                                <div className="filter-box p-10">
                                    <Typography>Price</Typography>
                                    <Slider
                                        value={price}
                                        onChange={priceHandler}
                                        valueLabelDisplay='on'
                                        aria-labelledby='range-slider'
                                        min={0}
                                        max={2500}
                                    ></Slider>
                                    <Typography>Categories</Typography>
                                    <ul className="category-box">
                                        {
                                            categories.map((category) => (
                                                <li className="category-link hover:text-violet-700"
                                                    key={category}
                                                    onClick={() => setCategory(category)}
                                                > {category} </li>
                                            ))
                                        }
                                    </ul>
                                    <fieldset>
                                        <Typography component="legend">
                                            Ratings 
                                        </Typography>
                                        <Slider value={ratings}
                                            onChange={(e, newRating) => setRatings(newRating)}
                                        aria-labelledby="continuous-slider"
                                        min={0}
                                        max={5}
                                        />
                                    </fieldset>
                                </div>
                                <div className="flex flex-col items-center justify-center flex-1">
                                    <h2 className=" mb-4 p-4 w-fit border-b-2 self-center">Products</h2>

                                    <div className="grid grid-cols-1 max-w-[80%] gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                        {products && products.map((product) => (
                                            <Product key={product._id} product={product} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* **********************PAGINATION ******************************************* */}
                            {
                                resultPerPage < filteredProductCount && (
                                    <div className="pagination-box ">
                                        <Pagination activePage={currentPage}
                                            itemsCountPerPage={resultPerPage}
                                            totalItemsCount={filteredProductCount}
                                            onChange={setCurrentPageNo}
                                            nextPageText="Next"
                                            prevPageText="Prev"
                                            firstPageText="1st"
                                            lastPageText="Last"
                                            itemClass='page-item'
                                            linkClass='page-link'
                                            activeClass='pageItemActive'
                                            activeLinkClass='pageLinkActive'
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </Fragment>)
            }
        </Fragment>
    )
}

export default Products