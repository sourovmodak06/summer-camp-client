import { useEffect, useState } from "react";
import axios from "../../../hooks/useAxios";
import ClassCard from "../../../components/classCard/ClassCard";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { Typewriter } from "react-simple-typewriter";

const PopularClasses = () => {
  const { user } = useAuth();
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
      <SectionTitle heading={"Popular Classes"}></SectionTitle>
      {!user && (
        <p className="text-[#D31A50] font-bold text-2xl text-center">
          Before Enrolling{" "}
          <span style={{ fontWeight: "bold" }}>
            <Typewriter
              words={["Login", "Register", "Social Login"]}
              loop={10}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-10 overflow-hidden py-10">
        {classes.slice(0, 6).map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
