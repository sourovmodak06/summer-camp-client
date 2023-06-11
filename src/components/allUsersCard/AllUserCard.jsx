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
        <button className="m-2 p-1 text-white bg-[#f7cc2e9c]">
          Instructor
        </button>
      </td>
      <td className="text-center">
        {item.role === "admin" ? (
          "admin"
        ) : (
          <button
            onClick={() => handleMakeAdmin(item)}
            className="m-2 p-1 text-white bg-[#22cb5da9]"
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
