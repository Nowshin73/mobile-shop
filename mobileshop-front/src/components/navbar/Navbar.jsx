import React, { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../providers/AuthProvider";
import useUser from "../../hooks/useUser";
import { MdDashboard } from "react-icons/md";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [User] = useUser();
  const role = User?.role;
  return (
    <nav className="bg-blue-950 p-4 font-serif">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white text-xl font-bold">MobiVerse</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <ActiveLink to='/' className="text-white hover:text-gray-300">
              Home
            </ActiveLink>
            <ActiveLink to='/products' className="text-white hover:text-gray-300">
              Products
            </ActiveLink>
            <ActiveLink to='/about' className="text-white hover:text-gray-300">
             About
            </ActiveLink>
            {user && User && role ==="buyer" && (
              <>
                <ActiveLink to='/user/dashboard' className="text-white  hover:text-gray-300">
                 Dashboard
                </ActiveLink>
                <ActiveLink to='/user/dashboard/cart' className="text-white hover:text-gray-300">
                  <BsCart></BsCart> Cart
                </ActiveLink>
              </>
            )}
            
            {user && User && role ==="seller" && (
              <>
                <ActiveLink to='/seller/dashboard' className="text-white hover:text-gray-300">
                 Dashboard
                </ActiveLink>
                
              </>
            )}
            {user && User && role ==="admin" && (
              <>
                <ActiveLink to='/admin/dashboard' className="text-white hover:text-gray-300">
                 Dashboard
                </ActiveLink>
                
              </>
            )}

              <ActiveLink to='/login' className="text-white hover:text-gray-300">
                Login
              </ActiveLink>
            

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
