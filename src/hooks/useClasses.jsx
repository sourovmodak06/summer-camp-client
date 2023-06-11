import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: classItems = [] } = useQuery({
    queryKey: ["classCart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/classCart?email=${user?.email}`);
      return res.data;
    },
  });
  return [classItems, refetch];
};
export default useClasses;
