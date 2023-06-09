import InstructorsCard from "../../../components/instructorsCard/InstructorsCard";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
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
    <div className="dark:bg-[#0D0D0D]">
      <SectionTitle heading={"Popular Instructors"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-1 md:mx-10 overflow-hidden py-10">
        {instructors.slice(0, 6).map((item) => (
          <InstructorsCard key={item._id} item={item}></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
