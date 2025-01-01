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

        const fetchMyOrders = async () => {
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

    console.log(myorder)
    return (
        <div>
            {myorder.length !== 0 ? (
                <div className='flex flex-col justify-center items-center lg:w-[70vw] lg:h-[80vh]'>
                   <div className="orderContainer">
                   <table className='w-[80vh] text-center'>
                        <tr className=' p-5'>
                            <th className='bg-indigo-600 text-white border-2 border-white'>Order ID</th>
                            <th className='bg-indigo-600 text-white border-2 border-white'>Date</th>
                            <th className='bg-indigo-600 text-white border-2 border-white'>Status</th>
                        </tr>
                        <tr>
                            <td className='bg-indigo-100 text-slate-800 border-2 border-white'>Alfreds Futterkiste</td>
                            <td className='bg-indigo-100 text-slate-800 border-2 border-white'>Maria Anders</td>
                            <td className='bg-indigo-100 text-slate-800 border-2 border-white'>Germany</td>
                        </tr>
                        <tr>
                            <td className='bg-indigo-100 text-slate-800 border-2 border-white'>Centro comercial Moctezuma</td>
                            <td className='bg-indigo-100 text-slate-800 border-2 border-white'>Francisco Chang</td>
                            <td className='bg-indigo-100 text-slate-800 border-2 border-white'>Mexico</td>
                        </tr>
                    </table>
                   </div>
                </div>
            )
                : <div className='flex flex-col text-7xl text-violet-900 justify-center items-center md:w-[70vw] md:h-[100vh]'> <p>No Order Added</p></div>
            }
        </div>
    )
}

export default Orders