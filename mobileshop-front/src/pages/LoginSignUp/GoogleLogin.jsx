import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useUser from "../../hooks/useUser";


const GoogleLogin = () => {
  const { signInWithGoogle, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [User] = useUser();
  //const location = useLocation();
  //const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    // Ensure user is loaded and the admin status is available
    if (user) {
      if (User && User.isAdmin === "yes") {
        navigate('/dashboard/admin');
      } else {
        navigate('/dashboard/user');
      }

    }
  }, [user, navigate]);

  const handleGoogleSignIn = () => {

    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        const savedUser = {
          email: loggedInUser.email,
          name: loggedInUser.displayName,
          photo: loggedInUser.photoURL,
          role: "buyer",
          createdAt: loggedInUser.metadata.creationTime,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            if (user) {
              if (User && User.isAdmin === "yes") {
                navigate('/dashboard/admin');
              } else {
                navigate('/dashboard/user');
              }
        
            }
          })
          .catch((error) => {
            console.error("Error saving user:", error);

          });
      })
      .catch((error) => {
        console.error("Google login failed:", error.message);

      });
  };

  return (
    <div>

      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded cursor-pointer"
      >
        <FcGoogle size={32} />
        <p>Continue with Google</p>
      </div>

    </div>
  );
};

export default GoogleLogin;
