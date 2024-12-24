import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [userRole, setUserRole] = useState([]);
  const handleRole = (userId, userRole) => {
    const updatedInfo = { role: userRole};
    console.log(updatedInfo)
    axios.patch(`http://localhost:5000https://mobiverse.vercel.app/users/${userId}`, updatedInfo)
      .then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `User role updated to ${userRole} successfully`,
          showConfirmButton: true,
          timer: 1500,
        });
        //alert('User role updated successfully', response.data);
        // Update the state after successful update
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, isAdmin: updatedInfo } : user
          )
        );
      })
      .catch(error => {
        Swal.fire('Error updating user role:', error);
      });
  };

  useEffect(() => {
    fetch('http://localhost:5000https://mobiverse.vercel.app/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000https://mobiverse.vercel.app/users/${id}`)
      .then((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Deleted Successfully.',
          showConfirmButton: true,
          timer: 1500,
        });

        // Update the state to remove the deleted user
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((error) => {
        Swal.fire('Error deleting user:', error);
      });
  };

  return (
    <div className="bg-white p-2 rounded-md">
      <h1 className="text-4xl text-center font-bold my-8">User List</h1>

      <div className="overflow-x-auto w-full">
        <table className="table border-y">
          {/* head */}
          <thead className="font-bold text-xl text-center text-[#2a3d94] ">
            <tr>
              <th className='border-x'>No</th>
              <th className='border-x'>Name</th>
              <th className='border-x'>Email</th>
              <th className='border-x'>Type</th>
              <th className='border-x'>Created At</th>
              <th className='border-x'>Actions</th>

            </tr>
          </thead>
          <tbody>
            {
              users.map((p, index) =>
                <tr key={p._id}>
                  <th className='border-x'>{index + 1}</th>
                  <td className="border-x grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <img className="rounded w-12 h-12" src={p.photo} alt="" />
                    {p.name}
                  </td>

                  <td className='border-x'>{p.email}</td>
                  <td className='border-x'>{p.role}</td>
                  <td className='border-x'>{p.createdAt}</td>
                  {/* <td>{p.date}</td> */}
                  <td className='border-x'><div className='action-buttons flex gap-1'>
                    <select
                      name="role"
                      onChange={(e)=>setUserRole(e.target.value)}
                     
                      className="bg-[#4361ee] px-4 py-2 lg:rounded-md text-white font-semibold hover:bg-[#2a3d94]">
                      <option value={"buyer"}>Buyer</option>
                       <option value={"seller"}>Seller</option>
                       <option value={"admin"}>Admin</option>
                    </select>
                    <button  onClick={() => handleRole(p._id, userRole)}  className=" btn btn-success text-white ">
                      Update
                    </button>
                    <button onClick={() => handleDelete(p._id)} className="bg-red-700 px-4 py-2 lg:rounded-md text-white font-semibold hover:bg-red-900">
                      Delete
                    </button>
                  </div></td>

                </tr>
              )
            }

          </tbody>

        </table>
      </div>
    </div>
  );
};


export default UserList