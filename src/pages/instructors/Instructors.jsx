import InstructorsCard from "../../components/instructorsCard/InstructorsCard";
import axios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Instructors = () => {
  useTitle("Instructors");
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
      <SectionTitle heading={"Instructors"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-1 md:mx-10 overflow-hidden py-10">
        {instructors.map((item) => (
          <InstructorsCard key={item._id} item={item}></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
