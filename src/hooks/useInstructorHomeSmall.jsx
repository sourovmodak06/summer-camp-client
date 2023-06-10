import { FaCalendarPlus, FaChalkboardTeacher, FaHome, FaHouseUser } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { Link } from "react-router-dom";


const useInstructorHomeSmall = () => {
    const instructorHomeSmall = (
        <>
          <Link to={"/"}>
            <h2 className="text-white text-2xl">
              <FaHouseUser></FaHouseUser>
            </h2>
          </Link>
          <Link to={"/"}>
            <h2 className="text-white text-2xl">
              <FaCalendarPlus></FaCalendarPlus>
            </h2>
          </Link>
          <Link to={"/"}>
            <h2 className="text-white text-2xl">
            <SiGoogleclassroom></SiGoogleclassroom>
            </h2>
          </Link>
        
    
          <div className="w-full h-[2px] bg-white"></div>
          {/* Small Device */}
          <Link to={"/"}>
            <h2 className="text-white text-2xl">
              <FaHome></FaHome>
            </h2>
          </Link>
          <Link to={"/instructors"}>
            <h2 className="text-white text-2xl">
              <FaChalkboardTeacher></FaChalkboardTeacher>
            </h2>
          </Link>
        </>
      );
      return instructorHomeSmall;
};

export default useInstructorHomeSmall;