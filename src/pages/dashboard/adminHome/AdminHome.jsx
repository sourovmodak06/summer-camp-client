import { Fade } from "react-awesome-reveal";
import useAuth from "../../../hooks/useAuth";
import useTitle from "../../../hooks/useTitle";
import WImg from "../../../assets/welcome.gif";
import axios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";

const AdminHome = () => {
  useTitle("Instructors | Admin Home");
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  const classesData = async () => {
    const res = await axios.get("/classes");
    setClasses(res.data);
  };
  useEffect(() => {
    classesData();
  }, []);
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
      <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[90vh] p-6 overflow-scroll">
        <Fade>
          <h2 className="text-3xl py-1 bg-white text-center rounded-2xl">
            Hi,{user.displayName}
          </h2>
        </Fade>
        <div className="flex items-center justify-center bg-white -mt-4 flex-col rounded-br-2xl rounded-bl-2xl">
          <img src={WImg} alt="img" className="w-[30%]" />
          <div className="flex gap-10 mb-10">
            <div className="bg-[#03203C] text-[#D31A50] p-10 rounded-2xl text-2xl flex flex-col items-center gap-5 w-1/2">
              <Fade>
                <h2>Total Class: {classes.length}</h2>
              </Fade>
            </div>
            <div className="bg-[#03203C] text-[#D31A50] p-10 rounded-2xl text-2xl flex flex-col items-center gap-5 w-1/2">
              <Fade>
                <h2>Total Instructor :{instructors.length}</h2>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
