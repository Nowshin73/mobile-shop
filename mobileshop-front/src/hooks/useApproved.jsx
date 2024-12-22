import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useApproved = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const { refetch, data: Approves = [] } = useQuery({
        queryKey: ['Approves', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/approved_applications`)
            return res.json();
        },
    });

    // Filter Users based on user?.email
    const Approve = Approves.find(ins => ins.userEmail === user?.email);

    return [Approve, refetch];
};

export default useApproved;
