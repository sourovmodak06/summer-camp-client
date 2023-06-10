import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
const useClasses = () => {
    const {user} = useAuth();

    const { refetch, data: classItems = [] } = useQuery({
        queryKey: ['classCart', user?.email],
        queryFn: async () => {
                const res = await fetch(`https://school-of-rock-server.vercel.app/classCart?email=${user?.email}`)
                return res.json();
            },
      })
      return [classItems, refetch]
}
export default useClasses;