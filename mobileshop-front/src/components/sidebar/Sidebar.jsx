import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useUser from "../../hooks/useUser";
import { RiProfileFill } from "react-icons/ri";

const Sidebar = () => {
  const {user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  //   console.log(user);
  const from = "/";

  const signOut = () => {
    logOut()
      .then(() => navigate(from))
      .catch((err) => console.log(err));
  };

  

  const [User] = useUser();

 const role = User?.role;

const photoURL = User?.photoURL;
 
 // const User = Users.filter(ins => ins.email === user?.email);


  return (
    <div style={{ background: "linear-gradient(90deg, #7209b7 0%, #3a0ca3 100%)"}} className=" h-auto text-white">
      <div className="grid   md:flex px-8  md:flex-col justify-between  md:justify-start text-white  pt-10">
        <div className="hidden lg:flex md:flex-wrap lg:flex-wrap lg:items-center lg:gap-4 pb-5">
         { user && User?  <img
            src={User.photo}
            className="w-36 h-36 rounded-full shadow-sm"
            alt=""
          />
        :
          <img
            src='https://i.ibb.co/PwHygL1/image.png'
            className="w-36 h-36 rounded-full shadow-sm"
            alt=""
          />
        }    
          <div>
            <p className="capitalize text-2xl italic font-serif">{User?.name}</p>
          </div>
        </div>
        <div>
          {/* <Link to="/" className="block mb-4">
            Homepage
          </Link> */}
          {user && role ==="admin" &&(
            <>
              <Link to="/admin/dashboard" className="block mb-4">
                Admin Home
              </Link>
              <Link to="/admin/dashboard/users" className="block mb-4">
                Users
              </Link>
              
            </>
          )} 
          {user && role === "buyer" &&(
            <>
              <Link to='/user/dashboard' className="block mb-4">
                Dashboard
              </Link>

              <Link to="/user/dashboard/cart" className="block mb-4">
                Cart
              </Link>
              <Link to="/user/dashboard/favourites" className="block mb-4">
                Favourite Products
              </Link>
              <Link to="/user/dashboard/orders" className="block mb-4">
                Orders
              </Link>
            </>
          )}
          {user && role === "seller" &&(
            <>
              <Link to='/seller/dashboard' className="block mb-4">
                Dashboard
              </Link>

              <Link to="/seller/dashboard/product/new" className="block mb-4">
                Add Product
              </Link>
              <Link to="/seller/dashboard/my_products" className="block mb-4">
                My Products
              </Link>
            </>
          )}
        
          <div className="mb-4 cursor-pointer " onClick={signOut}>
            Sign out
          </div>
        </div>
        <div className="lg:hidden flex flex-wrap items-center  gap-2 pb-5">
          {
            user && User? <img
            src={User.photo}
            className="w-12 h-12 rounded-full shadow-sm"
            alt=""
          />
          :
          <RiProfileFill className="text-white text-5xl"></RiProfileFill>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
