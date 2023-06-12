import {
  FaClipboardList,
  FaHome,
  FaHouseUser,

} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { Link } from "react-router-dom";

const useUserSideNavSmall = () => {
  const userHomeSmall = (
    <>
      <Link to={"/dashboard/studentHome"}>
        <h2 className="text-white text-2xl">
          <FaHouseUser></FaHouseUser>
        </h2>
      </Link>
      <Link to={"/dashboard/studentClasses"}>
        <h2 className="text-white text-2xl">
          <FaClipboardList></FaClipboardList>
        </h2>
      </Link>


      <div className="w-full h-[2px] bg-white"></div>
      <Link to={"/"}>
        <h2 className="text-white text-2xl">
          <FaHome></FaHome>
        </h2>
      </Link>
      <Link to={"/classes"}>
        <h2 className="text-white text-2xl">
          <SiGoogleclassroom></SiGoogleclassroom>
        </h2>
      </Link>
    </>
  );
  return userHomeSmall;
};

export default useUserSideNavSmall;
