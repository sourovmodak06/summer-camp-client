import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import axios from "../../../hooks/useAxios";
import ManageClassCard from "../../../components/manageClassCard/ManageClassCard";

const ManageClassItem = () => {
  useTitle("Instructors | Admin Manage Class");
  const [classes, setClasses] = useState([]);
  const classesData = async () => {
    const res = await axios.get("/classes");
    setClasses(res.data);
  };
  useEffect(() => {
    classesData();
  }, []);
  return (
    <div>
       <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[90vh] p-6 overflow-scroll">
       <div className="w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Images</th>
                <th>Name Of Class</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {classes.map((item, index) => (
                <ManageClassCard key={item._id} item={item} index={index}></ManageClassCard>
              ))}
            </tbody>
          </table>
        </div>
       </div>
    </div>
  );
};

export default ManageClassItem;
