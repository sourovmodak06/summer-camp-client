import { useQuery } from "@tanstack/react-query";
import AllUserCard from "../../../components/allUsersCard/AllUserCard";
import { Bounce } from "react-awesome-reveal";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://school-of-rock-server.vercel.app/users");
    return res.json();
  });
  return (
    <div>
      <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[90vh] p-6 overflow-hidden">
        <Bounce>
          <h2 className="text-2xl uppercase text-white py-4">
            total user : {users.length}
          </h2>
        </Bounce>
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Instructor</th>
                <th>Admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <AllUserCard
                  key={item._id}
                  item={item}
                  index={index}
                  refetch={refetch}
                ></AllUserCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
