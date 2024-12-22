import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useProfile = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const { refetch, data: Profiles = [] } = useQuery({
        queryKey: ['Profiles', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/profiles`)
            return res.json();
        },
    });

    // Filter Users based on user?.email
    const Profile = Profiles.find(ins => ins.userEmail === user?.email);

    return [Profile, refetch];
};

export default useProfile;
