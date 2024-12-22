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

 const isAdmin = User?.isAdmin;

const photoURL = User?.photoURL;
 
 // const User = Users.filter(ins => ins.email === user?.email);


  return (
    <div style={{ background: "linear-gradient(90deg, #7209b7 0%, #3a0ca3 100%)"}} className=" h-full text-white">
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
          {user && isAdmin =="yes" &&(
            <>
              <Link to="/dashboard/admin" className="block mb-4">
                Admin Home
              </Link>
              <Link to="/dashboard/admin/users" className="block mb-4">
                Users
              </Link>
              <Link to="/dashboard/pending_application" className="block mb-4">
                Pending Correction Applications
              </Link>
             
              <Link to="/dashboard/reviewed_application" className="block mb-4">
                Reviewed Correction Applications
              </Link>
              <Link to="/dashboard/approved_application" className="block mb-4">
                Approved Correction Applications
              </Link>
            </>
          )} 
          {user && (!isAdmin || isAdmin== "no") &&(
            <>
              <Link to='/user/dashboard' className="block mb-4">
                Dashboard
              </Link>

              <Link to="/cart" className="block mb-4">
                Cart
              </Link>
              <Link to="/favourites" className="block mb-4">
                Favourite Products
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
