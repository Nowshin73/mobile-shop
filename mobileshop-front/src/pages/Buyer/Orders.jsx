import React, { useEffect, useState } from 'react'
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const Orders = () => {

    const [User] = useUser(); // Get the current logged-in user
    const userId = User?._id; // User ID
    const navigate = useNavigate();
    const [myorder, setMyOrder] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) {
            setMyOrder([]);
            setLoading(false);
            return;
        }

        const fetchMyOrders= async () => {
            try {
                const response = await fetch(`https://mobiverse.vercel.app/orders?buyerId=${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to fetch your orders",
                        icon: "error",
                        confirmButtonText: "Ok",
                    });

                }
                const data = await response.json();
                if (userId) {
                    const filtered = data.filter((order) => order.buyerId === userId);
                    setMyOrder(filtered);
                } else {
                    setMyOrder([]);
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

        fetchMyOrders();
    }, [userId]);


    return (
        <div>
            {myorder.length !== 0 ? (
                <div className="flex md:w-[70vw] md:h-[100vh] flex-col justify-center  overflow-y-scroll bg-white shadow-xl">
                    <div >
                        <div className=" overflow-y-auto px-4 py-6 sm:px-6">

                            <div className="mt-8">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {myorder.map((product) => (
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
                : <div className='flex flex-col text-7xl text-violet-900 justify-center items-center md:w-[70vw] md:h-[100vh]'> <p>No Order Added</p></div>
            }
        </div>
    )
}

export default Orders