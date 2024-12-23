import React, { useEffect, useState } from 'react'

const UpdateProduct = () => {
    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     fetch('/pending.json')
    //     .then(res => res.json())
    //     .then(data => setPending(data));
    // },[])
    const updateProduct = event => {
        event.preventDefault();
        const form = event.target;

        const productData = {
            name: form.name.value,
            description: form.description.value,
            price: form.price.value,
            category: form.category.value,
            brand: form.brand.value,
            images: form.images.value
        };


        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Product Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    navigate("/seller/dashboard");
                }

            })
        form.reset();

    }


    const product =
    {
        name: "Samsung Galaxy F13 (4/64GB)",
        description: "Display: 6.6 FHD+ PLS LCD Touchscreen, Processor: Octa-Core 2GHz, Exynos 850 (8nm),Camera: Triple 50+5+2 MP on Rear, 8MP Selfie,Features: 6000mAh Battery, Side Mounted Fingerprint",
        price: 16500,
        images: "https://i.ibb.co.com/q1Xnd3m/image.png",
        brand: "Samsung",
        category: "Android"
    };

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
                                value={product.name}
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
                                placeholder='Product Price '
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
                        <div className="mt-2">
                            <input
                                id="brand"
                                name="brand"
                                type="brand"
                                placeholder='Product Brand'
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Product Category
                        </label>
                        <div className="mt-2">
                            <input
                                id="category"
                                name="category"
                                type="category"
                                placeholder='Product Category'
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
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