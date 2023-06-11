import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user,loading } = useAuth();

  const { refetch, data: classItems = [] } = useQuery({
    queryKey: ["classCart", user?.email],
    enabled: !loading && !user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/classCart?email=${user?.email}`);
      return res.data;
    },
  });
  return [classItems, refetch];
};
export default useClasses;
