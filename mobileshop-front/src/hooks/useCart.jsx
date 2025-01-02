import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const { refetch, data: Carts = [] } = useQuery({
        queryKey: ['Carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://mobiverse.vercel.app/cart`)
            return res.json();
        },
    });

    // Filter Users based on user?.email
    const MyCart = Carts.filter(ins => ins.userEmail === user?.email);
    //const filtered = data.filter((product) => product.userId === userId);
    return [MyCart, refetch];
};

export default useCart;