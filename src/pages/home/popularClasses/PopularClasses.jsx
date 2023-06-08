import { useEffect, useState } from "react";
import axios from "../../../hooks/useAxios";
import ClassCard from "../../../components/classCard/ClassCard";

const PopularClasses = () => {
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
      <div className="flex flex-col items-center py-5">
        <span className="text-3xl md:text-7xl font-extrabold tracking-[0.5rem] uppercase textEffect bg-[#03203C] p-5">
          Popular Classes
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-10 overflow-hidden py-10">
        {classes.slice(0,6).map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
