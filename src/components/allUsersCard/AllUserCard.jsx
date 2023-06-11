import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUserCard = ({ item, index, refetch }) => {
  const { email, name } = item;
  const handleMakeAdmin = (item) => {
    fetch(`https://school-of-rock-server.vercel.app/users/admin/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (item) => {
    fetch(`https://school-of-rock-server.vercel.app/users/instructor/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is an Instructor Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">
        <h2>{name}</h2>
      </td>
      <td className="text-center">
        <h2>{email}</h2>
      </td>
      <td className="text-center">
        {item.role === "instructor" ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 bg-[#E8BD0D] rounded-full"></div>
            <h2 className="text-[#F4BE2C]">instructor</h2>
          </div>
        ) : (
          <button
            onClick={() => handleMakeInstructor(item)}
            className="m-2 p-1  text-white bg-[#f7cc2e9c]"
          >
            Instructor
          </button>
        )}
      </td>
      <td className="text-center">
        {item.role === "admin" ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 bg-[#02ff5a] rounded-full"></div>
            <h2 className="text-[#034b1c]">admin</h2>
          </div>
        ) : (
          <button
            onClick={() => handleMakeAdmin(item)}
            className="m-2 p-1 w-full text-white bg-[#22cb5da9]"
          >
            Admin
          </button>
        )}
      </td>
      <td className="text-center">
        <button className="text-2xl text-[#D31A50]">
          <FaTrash></FaTrash>
        </button>
      </td>
    </tr>
  );
};

export default AllUserCard;
