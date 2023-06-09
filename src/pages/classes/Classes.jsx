import { useEffect, useState } from "react";
import ClassCard from "../../components/classCard/ClassCard";
import axios from "../../hooks/useAxios";
import useTitle from "../../hooks/useTitle";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Classes = () => {
  useTitle("Classes");
  const [classes, setClasses] = useState([]);
  const classesData = async () => {
    const res = await axios.get("/classes");
    setClasses(res.data);
  };
  useEffect(() => {
    classesData();
  }, []);
  return (
    <div className="dark:bg-[#0D0D0D]">
      <SectionTitle heading={"Classes"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-10 overflow-hidden py-10">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
