import { FaChalkboard, FaHome, FaHouseUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";


const useAdminSideNavSmall = () => {
    const adminHomeSmall = (
        <>
          <Link to={"/"}>
            <h2 className="text-white text-2xl">
              <FaHouseUser></FaHouseUser>
            </h2>
          </Link>
          <Link to={"/"}>
            <h2 className="text-white text-2xl">
              <FaChalkboard></FaChalkboard>
            </h2>
          </Link>
          <Link to={"/"}>
            <h2 className="text-white text-2xl">
              <FaUsers></FaUsers>
            </h2>
          </Link>
    
          <div className="w-full h-[2px] bg-white"></div>
          {/* Small Device */}
          <Link to={"/"}>
            <h2 className="text-white text-2xl">
              <FaHome></FaHome>
            </h2>
          </Link>
        </>
      );
      return adminHomeSmall;
};

export default useAdminSideNavSmall;