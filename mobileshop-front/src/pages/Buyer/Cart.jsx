import React, { useEffect } from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
//import { XMarkIcon } from '@heroicons/react/24/outline'
import { BsXCircle } from 'react-icons/bs'
import useUser from '../../hooks/useUser'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [User] = useUser(); // Get the current logged-in user
  const userId = User?._id; // User ID
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [cartIems, setCartItems] = useState([]);

  useEffect(() => {
    if (!userId) {
      setCartProducts([]);
      setLoading(false);
      return;
    }

    const fetchCartProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cart?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          Swal.fire({
            title: "Error!",
            text: "Failed to fetch cart products",
            icon: "error",
            confirmButtonText: "Ok",
          });

        }
        const data = await response.json();
        setCartProducts(data);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `Error fetching cart products:, ${error}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCartProducts();
  }, [userId]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/cart/${id}`)
      .then((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product Removed.',
          showConfirmButton: true,
          timer: 3000,
        });

        // Update the state to remove the deleted user
        setCartProducts((prevCartProducts) => prevCartProducts.filter((cartitem) => cartitem._id !== id));
      })
      .catch((error) => {
        Swal.fire('Error deleting Cart Item:', error);
      });
  };

 // Calculate total price
 const totalPrice = cartProducts.reduce(
  (total, item) => total + item.quantity * item.price,
  0
);

  return (
    <div>
      {cartProducts ? (
        <div className="flex h-full w-[80%] flex-col justify-center  overflow-y-scroll bg-white shadow-xl">
          <div className=" overflow-y-auto px-4 py-6 sm:px-6">

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartProducts.map((product) => (
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
                          <p className="text-gray-500">Qty {product.quantity}</p>

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

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p className="ml-4 font-serif"> {totalPrice}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Delivery Charge </p>
              <p className="ml-4 font-serif">150৳</p>
              
            </div>
           
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total Price </p>
              <p className="ml-4 font-serif text-green-600"> {(totalPrice+150).toFixed(2)}৳</p>
              
            </div>
           
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{' '}
                <Link to="/products"><button
                  type="button"
                  
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button></Link>
              </p>
            </div>
          </div>
        </div>)
        : <div className='flex flex-col justify-center items-center'> <p>Your cart is empty.</p></div>
      }
    </div>

  )
}

export default Cart