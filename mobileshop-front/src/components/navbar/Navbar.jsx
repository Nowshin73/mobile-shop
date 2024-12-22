import React, { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

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
            {user ? (
              <>
                <ActiveLink to='/user/dashboard' className="text-white hover:text-gray-300">
                 Dashboard
                </ActiveLink>
                <ActiveLink to='/profile' className="text-white hover:text-gray-300">
                  Profile
                </ActiveLink>
              </>
            )
              :
              <ActiveLink to='/login' className="text-white hover:text-gray-300">
                Login
              </ActiveLink>
            }

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
