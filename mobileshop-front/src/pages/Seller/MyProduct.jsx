import React, { useEffect } from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
//import { XMarkIcon } from '@heroicons/react/24/outline'
import { BsXCircle } from 'react-icons/bs'
import useUser from '../../hooks/useUser'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MyProduct = () => {
  const [User] = useUser(); // Get the current logged-in user
  const userId = User?._id; // User ID
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [cartIems, setCartItems] = useState([]);

  useEffect(() => {
    if (!userId) {
      setMyProducts([]);
      setLoading(false);
      return;
    }

    const fetchMyProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000https://mobiverse.vercel.app/products?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          Swal.fire({
            title: "Error!",
            text: "Failed to fetch your products",
            icon: "error",
            confirmButtonText: "Ok",
          });

        }
        const data = await response.json();
        setMyProducts(data);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `Error fetching Your products:, ${error}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMyProducts();
  }, [userId]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000https://mobiverse.vercel.app/products/${id}`)
      .then((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product Removed.',
          showConfirmButton: true,
          timer: 3000,
        });

        // Update the state to remove the deleted user
        setMyProducts((prevCartProducts) => prevCartProducts.filter((cartitem) => cartitem._id !== id));
      })
      .catch((error) => {
        Swal.fire('Error deleting Cart Item:', error);
      });
  };

 

  return (
    <div className="flex h-full w-[60%] flex-col justify-center  overflow-y-scroll bg-white shadow-xl">
      {myProducts? (
        <div >
          <div className=" overflow-y-auto px-4 py-6 sm:px-6">

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {myProducts.map((product) => (
                    <li key={product._id} className="flex py-6">
                      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img alt={product.images} src={product.images} className="size-full object-cover" />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              {product.name}
                            </h3>
                            <p className="ml-4 font-serif">{product.price}৳</p>
                          </div>

                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty {product.stock}</p>

                          <div className="flex">
                            <button onClick={() => handleDelete(product._id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>)
        : <div className='flex flex-col justify-center items-center'> <p>You have no product.</p></div>
      }
    </div>

  )
}

export default MyProduct