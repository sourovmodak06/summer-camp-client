import { useEffect, useState } from "react";
import ClassCard from "../../components/classCard/ClassCard";
import axios from "../../hooks/useAxios";
import useTitle from "../../hooks/useTitle";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { Typewriter } from 'react-simple-typewriter';
import useAuth from "../../hooks/useAuth";
import { ToastContainer } from "react-toastify";

const Classes = () => {
  const { user } = useAuth();
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
      <ToastContainer theme="colored" />
      <SectionTitle heading={"Classes"}></SectionTitle>
      {!user && (
        <p className="text-[#D31A50] font-bold text-2xl text-center">
          Before Enrolling{" "}
          <span style={{  fontWeight: "bold" }}>
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
        {classes.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
