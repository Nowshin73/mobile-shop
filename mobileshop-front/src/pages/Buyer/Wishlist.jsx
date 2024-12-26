import React, { useEffect } from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
//import { XMarkIcon } from '@heroicons/react/24/outline'
import { BsXCircle } from 'react-icons/bs'
import useUser from '../../hooks/useUser'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const [User] = useUser(); // Get the current logged-in user
  const userId = User?._id; // User ID
  const [myFavs, setMyFavs] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [cartIems, setCartItems] = useState([]);

  useEffect(() => {
    if (!userId) {
      setMyFavs([]);
      setLoading(false);
      return;
    }

    const fetchMyProducts = async () => {
      try {
        const response = await fetch(`https://mobiverse.vercel.app/fav?userId=${userId}`, {
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
        if (userId) {
          const filtered = data.filter((product) => product.userId === userId);
          setMyFavs(filtered);
        } else {
          setMyFavs([]);
        }
       
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
      .delete(`https://mobiverse.vercel.app/fav/${id}`)
      .then((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product Removed.',
          showConfirmButton: true,
          timer: 3000,
        });

        // Update the state to remove the deleted user
        setMyFavs((prevCartProducts) => prevCartProducts.filter((cartitem) => cartitem._id !== id));
      })
      .catch((error) => {
        Swal.fire('Error deleting fav Item:', error);
      });
  };


  return (
    <div>
    {myFavs.length !==0 ? (
        <div className="flex md:w-[70vw] md:h-[100vh] flex-col justify-center  overflow-y-scroll bg-white shadow-xl">
        <div >
          <div className=" overflow-y-auto px-4 py-6 sm:px-6">

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {myFavs.map((product) => (
                    <li key={product._id} className="flex py-6">
                      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img alt={product.image} src={product.image} className="size-full object-cover" />
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
                          <button onClick={() => handleDelete(product._id)} type="button" className="font-medium text-white btn btn-error">
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
        </div>
        </div>)
        : <div className='flex flex-col text-7xl text-violet-900 justify-center items-center md:w-[70vw] md:h-[100vh]'> <p>No Favourite Added</p></div>
      }
    </div>

  )
}

export default Wishlist