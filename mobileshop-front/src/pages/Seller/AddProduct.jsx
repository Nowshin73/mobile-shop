import React from 'react'
import useUser from '../../hooks/useUser';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const [User] = useUser();
  const userId=User?._id;
  console.log(userId)
  const addProduct = event => {
    event.preventDefault();
    const form = event.target;

    const productData = {
      name: form.name.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      stock: parseInt(form.stock.value),
      category: form.category.value,
      brand: form.brand.value,
      images: form.images.value,
      userId,
      ratings:0,
      numOfReviews:0
    };
  
    console.log(productData)
  
    fetch('https://mobiverse.vercel.app/products', {
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
          navigate("/seller/dashboard/product/new");
        }

      })
    form.reset();

  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Add Your Product
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={addProduct} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
              Product Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
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
              Product Stock
            </label>
            <div className="mt-2">
              <input
                id="stock"
                name="stock"
                type="number"
                placeholder='Product Stock '
                required
                min={1}
                max={10000}
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
            <div className="mt-2 grid grid-cols-1">
              <select
                id="brand"
                name="brand"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value={"Samsung"}>Samsumg</option>
                <option value={"Apple"}>Apple</option>
                <option value={"OPPO"}>OPPO</option>
                <option value={"Nokia"}>Nokia</option>
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
              >
                <option value={"Android"}>Android</option>
                <option value={"iPhone"}>iPhone</option>
                <option value={"CellPhone"}>CellPhone</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Product
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">

        </p>
      </div>
    </div>
  )
}

export default AddProduct