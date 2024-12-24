import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data
    fetch("http://localhost:5000https://mobiverse.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-6 lg:p-12 w-full bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Box for Total Users */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-indigo-600 my-4">{users.length}</p>
          <Link
            to="/admin/dashboard/users"
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            View Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
