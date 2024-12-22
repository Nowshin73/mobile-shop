import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Loader from "../shared/loader/Loader";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  if (isAdminLoading) {
    return <Loader />;
  }

  if (isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/auth" replace />;
};

export default AdminRoute;
