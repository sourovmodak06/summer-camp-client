import { FaCcMastercard, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useClasses from "../../hooks/useClasses";
import { Link } from "react-router-dom";
const StudentClassCard = ({ item, index }) => {
  const [, refetch] = useClasses();
  const { image, name, instructorName, price, enrolledStudent } = item;
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://school-of-rock-server.vercel.app/classCart/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const handlePay = (item) =>{
    console.log(item._id);
  }
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>
        <img
          src={image}
          alt="img"
          className="w-14 h-14 my-3 mx-5 rounded-full "
        />
      </td>
      <td className="text-center">
        <h2>{name}</h2>
      </td>
      <td className="text-center">
        <h2>{instructorName}</h2>
      </td>
      <td className="text-center">
        <h2>{price}</h2>
      </td>
      <td className="text-center">
        <h2>{enrolledStudent}</h2>
      </td>
      <td className="text-center" onClick={() => handleDelete(item)}>
        <button className="text-2xl text-[#D31A50]">
          <FaTrash></FaTrash>
        </button>
      </td>
      <td onClick={() => handlePay(item)} className="text-center">
        <Link to={"/dashboard/pay"}>
          <button className=" text-[#03203C] text-2xl">
            <FaCcMastercard></FaCcMastercard>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default StudentClassCard;
