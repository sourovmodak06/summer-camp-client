import InstructorsCard from "../../../components/instructorsCard/InstructorsCard";
import axios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
  const instructorsData = async () => {
    const res = await axios.get("/instructors");
    setInstructors(res.data);
  };
  useEffect(() => {
    instructorsData();
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center py-5">
        <span className="text-3xl md:text-7xl font-extrabold tracking-[0.5rem] uppercase textEffect bg-[#03203C] p-5">
          Popular Instructors
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-1 md:mx-10 overflow-hidden py-10">
        {instructors.slice(0,6).map((item) => (
          <InstructorsCard key={item._id} item={item}></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
