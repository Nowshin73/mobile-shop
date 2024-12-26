import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLogin from "../../pages/LoginSignUp/GoogleLogin";
import useUser from "../../hooks/useUser";

const Register = () => {
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [User] = useUser();
  const role = User?.role;

  // const validatePassword = (password) => {
  //   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   return regex.test(password);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photURL.value;

    setError("");

    // if (!validatePassword(password)) {
    //   setError(
    //     "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character."
    //   );
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateUserProfile(name, photo)
          .then(() => {
            const savedUser = {
              email: result.user.email,
              name,
              photo: photo || "https://i.ibb.co.com/PwHygL1/image.png",
              role: "buyer",
              createdAt: new Date()
            };
            fetch(`https://mobiverse.vercel.app/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            });
          })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
        Swal.fire({
          title: "Success!",
          text: "You have successfully registered",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/user/dashboard");
      })
      .catch((error) => {
        setError(error.message);
      });

    form.reset();
  };

  return (
    <div className="flex justify-center sm:py-12 bg-white">
      <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-5 w-full bg-slate-100 text-gray-900">
        <div className="mb-8 text-center ">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to MobiVerse App</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="flex justify-between">
                <label htmlFor="name" className="text-sm mb-2">
                  User Name
                </label>
              </div>
              <input
                type="name"
                name="name"
                required
                placeholder="type your name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4361ee] bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="email" className="text-sm mb-2">
                  Email address
                </label>
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="type email address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4361ee] bg-gray-200 text-gray-900"
              />
            </div>

            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type={show ? "password" : "text"}
                name="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4361ee] bg-gray-200 text-gray-900"
              />
              <span
                onClick={() => setShow(!show)}
                className="cursor-pointer absolute right-0 top-1/2 mt-2 me-4"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="relative">
              <div className="flex justify-between">
                <label htmlFor="text" className="text-sm mb-2">
                  Photo Url
                </label>
              </div>
              <input
                type="url"
                name="photURL"
                placeholder="url"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#4361ee] bg-gray-200 text-gray-900"
              />
            </div>
          </div>
          <p className="text-center text-red-500 font-medium">{error}</p>
          <div>
            <button
              type="submit"
              className="bg-[#7209b7] hover:bg-[#3a0ca3] transition-all w-full rounded-md py-3 text-white"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">OR</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Register;
