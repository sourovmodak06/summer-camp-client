import { Link } from "react-router-dom";
import StudentClassCard from "../../../components/studentClassCard/StudentClassCard";
import useClasses from "../../../hooks/useClasses";
import useTitle from "../../../hooks/useTitle";

const StudentClasses = () => {
  useTitle("Dashboard | Selected");
  const [classItems] = useClasses();
  // console.log("class", classItems);
  const total = classItems.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[95vh] p-6 overflow-scroll">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-white">
            Selected Classes: {classItems.length}
          </h2>
          <h2 className="text-2xl text-white">Total Price : ${total}</h2>
        </div>
        <div className="w-full">
          <div className="flex justify-end">
            <Link to={"/dashboard/pay"}>
              <div className="bg-yellow-500 text-white p-2 my-4 rounded-xl">
                PAY ALL
              </div>
            </Link>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Images</th>
                <th>Name Of Class</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {classItems.map((item, index) => (
                <StudentClassCard
                  key={item._id}
                  item={item}
                  index={index}
                ></StudentClassCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentClasses;
