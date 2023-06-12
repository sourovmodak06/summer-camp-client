import MyClassesCard from "../../../components/myClassesCard/MyClassesCard";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";

const MyClass = () => {
  useTitle("Instructors | My Class");
  const { user } = useAuth();
  const [myClasses, setMyClasses] = useState([]);
  const myClassesData = async () => {
    const res = await axios.get(`/myClasses/${user?.email}`);
    setMyClasses(res.data);
  };
  useEffect(() => {
    myClassesData();
  }, []);

  return (
    <div>
      <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[95vh] p-6 overflow-scroll">
        <h2 className="text-2xl text-white">
          Selected Classes: {myClasses.length}
        </h2>
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Images</th>
                <th>Name</th>
                <th>Name Of Class</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {myClasses.map((item, index) => (
                <MyClassesCard
                  key={item._id}
                  item={item}
                  index={index}
                ></MyClassesCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
