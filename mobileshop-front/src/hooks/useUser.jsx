import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useUser = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const { refetch, data: Users = [] } = useQuery({
        queryKey: ['Users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            return res.json();
        },
    });

    // Filter Users based on user?.email
    const User = Users.find(ins => ins.email === user?.email);

    return [User, refetch];
};

export default useUser;
