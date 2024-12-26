import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useUser from '../../hooks/useUser';


const UpdateProduct = () => {
    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     fetch('/pending.json')
    //     .then(res => res.json())
    //     .then(data => setPending(data));
    // },[])
  
    const product = useLoaderData();
    console.log("Product",product)
    const {id} = useParams();
    const [productname, setProductName] = useState(product.name);
    const [productDescription, setProductDescription] = useState(product.description);
    const [productPrice, setProductPrice] = useState(product.price);
    const [productStock, setProductStock] = useState(product.stock);
    const [productCategory, setProductCategory] = useState(product.category);
    const [productBrand, setProductBrand] = useState(product.brand);
    const [productImages, setProductImages] = useState(product.images);

    const updateProduct = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form.name.value);
        const productData = {
            name: form.name.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            stock: parseInt(form.stock.value),
            category: form.category.value,
            brand: form.brand.value,
            images: form.images.value,
            userId: product.userId,
            ratings: parseFloat(product.ratings),
            numOfReviews: product.numOfReviews
        };


        fetch(`https://mobiverse.vercel.app/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true ) {
                    Swal.fire({
                        title: 'success',
                        text: 'Product Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    
                }

            })
        form.reset();

    }




    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Update Your Product
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={updateProduct} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Product Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={productname}
                                onChange={(e) => setProductName(e.target.value)}
                                placeholder='Product Name '
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Product Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                type="text"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                placeholder='Product Description'
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />

                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Product Price
                        </label>
                        <div className="mt-2">
                            <input
                                id="price"
                                name="price"
                                type="number"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                placeholder='Product Price '
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Product Stock
                        </label>
                        <div className="mt-2">
                            <input
                                id="stock"
                                name="stock"
                                type="number"
                                value={productStock}
                                onChange={(e) => setProductStock(e.target.value)}
                                placeholder='Product Stock '
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Product Image
                        </label>
                        <div className="mt-2">
                            <input
                                id="images"
                                name="images"
                                type="text"
                                value={productImages}
                                onChange={(e) => setProductImages(e.target.value)}
                                placeholder='Product Image URL'
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Product Brand
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                                id="brand"
                                name="brand"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                value={productBrand} // Bind the state
                                onChange={(e) => setProductBrand(e.target.value)} // Handle changes
                            >
                                <option value="">Select a brand</option> {/* Default option */}
                                <option value="Samsung">Samsung</option>
                                <option value="Apple">Apple</option>
                                <option value="OPPO">OPPO</option>
                                <option value="Nokia">Nokia</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Product Category
                        </label>
                        <div className="mt-2 grid grid-cols-1">
                            <select
                                id="category"
                                name="category"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                value={productCategory} // Bind the state
                                onChange={(e) => setProductCategory(e.target.value)} // Handle changes
                            >
                                 <option value="">Select a brand</option> {/* Default option */}
                                <option value="Android">Android</option>
                                <option value="iPhone">iPhone</option>
                                <option value="CellPhone">CellPhone</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update Product
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">

                </p>
            </div>
        </div>
    )
}

export default UpdateProduct