import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext)

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
     
      const res = await axios.get(
        `http://localhost:5000/api/users/check_admin/${user?.email}`
      );
      return res.data.isAdmin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
